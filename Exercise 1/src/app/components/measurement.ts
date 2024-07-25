import axios from 'axios';
import { apiUrls } from '../shared/configs/api-url.config';
import { ElectricityReading } from '../interfaces/types';
import { timeRange } from '../data/constants';

export const measurements = {

    /**
     * Fetches the UUID of the first metering point.
     *
     * This function sends a GET request to the `meteringpoints` endpoint to retrieve the list of metering points.
     * It then resolves the promise with the UUID of the first metering point in the list.
     * If the request fails, it throws an error with detailed information.
     *
     * @returns {Promise<string>} - A promise that resolves to the UUID of the first metering point.
     */
    getMeteringPoints: async (): Promise<string> => {
        return await axios.get(apiUrls.allMeteringPoints)
            .then((response) =>
                // Resolve the promise with the UUID of the first metering point
                Promise.resolve(response.data[0].uuid)
            )
            .catch((error) => {
                // Throw an error with details if the request fails
                throw new Error(`${error.code} Fetching metering points failed: ${error.response?.data?.message || error.message}`);
            });
    },

    /**
     * Fetches electricity readings for a given metering point and time range.
     *
     * This function sends a GET request to the `readings` endpoint for a specified metering point UUID
     * and a specified time range. It resolves the promise with the list of electricity readings.
     * If the request fails, it throws an error with detailed information.
     *
     * @param {string} meteringPoint - The UUID of the metering point.
     * @param {number} from - The start time in milliseconds since the Unix epoch.
     * @param {number} to - The end time in milliseconds since the Unix epoch.
     * @returns {Promise<ElectricityReading[]>} - A promise that resolves to an array of electricity readings.
     */
    getReadings: async (uuid: string, from: number, to: number): Promise<ElectricityReading[]> => {
        return await axios.get(apiUrls.definedRangeReading(uuid), {
            params: { from, to }
        })
            .then((response) => {
                // Sort data by readingTime in ascending order
                response.data = response.data.sort((a: any, b: any) => a.readingTime - b.readingTime);
                // Resolve the promise with the list of electricity readings
                return Promise.resolve(response.data)
            })
            .catch((error) => {
                // Throw an error with details if the request fails
                throw new Error(`${error.code} Fetching readings for ${new Date(timeRange.startTime)} - ${new Date(timeRange.endTime)} failed: ${error.response?.data?.message || error.message}`);
            });
    }
}
