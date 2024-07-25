import { ElectricityReading } from "../interfaces/types";
import { unitConversion } from "../shared/utils/unitConversion";

/**
 * Processes electricity readings to calculate overall consumption and maximum consumption.
 *
 * This function iterates through an array of electricity readings, sums up the total energy output
 * to calculate overall consumption, and identifies the maximum energy output recorded.
 * It then logs the overall consumption and maximum consumption in kWh to the console.
 *
 * @param {ElectricityReading[]} readings - An array of electricity readings.
 */
export const getResult = (readings: ElectricityReading[]) => {
    // Initialize variables to store overall consumption and maximum consumption
    let overallConsumption = 0;
    let maxConsumption = 0;

    // Iterate through each reading in the readings array
    for (let i = 1; i < readings.length; i++) {
        // Calculate the power consumed between consecutive readings
        const powerConsumed = readings[i].energyOut - readings[i - 1].energyOut;

        // Check if the current power consumed is greater than the previous maximum consumption
        if (powerConsumed > maxConsumption) {
            maxConsumption = powerConsumed; // Update the maximum consumption if the current reading exceeds it
        }

        // Accumulate the power consumed for overall consumption calculation
        overallConsumption += powerConsumed;
    }

    // Log the overall electricity consumption for the month of July 2023 in kWh
    console.log('The overall electricity consumption for the month of July 2023 is', unitConversion.convertmWhTokWh(overallConsumption));

    // Log the maximum power that was measured in the same month in kWh
    console.log('The maximum power that was measured in the same month is', unitConversion.convertmWhTokWh(maxConsumption));
}
