import axios from 'axios';
import { baseUrl, timeRange } from './app/data/constants';
import { measurements } from './app/components/measurement';
import { getResult } from './app/components/result';
import { loginUser } from './app/auth/login/login';

/**
 * Main function to execute the workflow.
 *
 * This function performs the following steps:
 * 1. Sets the base URL for axios.
 * 2. Logs in the user to retrieve authentication tokens.
 * 3. Fetches the UUID of the first metering point.
 * 4. Retrieves electricity readings for the specified metering point and time range.
 * 5. Processes and logs the results of the electricity readings.
 */
const main = async () => {
    try {
        // Set the base URL for axios requests
        axios.defaults.baseURL = baseUrl;

        // Login user to retrieve authentication tokens
        const loginResponse = await loginUser();

        // Fetch the UUID of the metering point
        const uuid = await measurements.getMeteringPoints();

        // Retrieve electricity readings for the specified metering point and time range
        const readings = await measurements.getReadings(uuid, timeRange.startTime, timeRange.endTime);

        // Process and log the results of the electricity readings
        getResult(readings);
    } catch (error: any) {
        // Throw an error if any step in the workflow fails
        throw new Error(error.response?.data?.message || error.message);
    }
}

// Execute the main function
main();
