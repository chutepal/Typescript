import { getResult } from "../../app/components/result";
import { ElectricityReading } from "../../app/interfaces/types";

// Describe block for the getResult function
describe('getResult function', () => {
    // Test case for calculating overall and maximum consumption
    it('should calculate overall and maximum consumption correctly', () => {
        // Test values for electricity readings
        const readings: ElectricityReading[] = [
            {
                readingTime: 1690818300000,
                serverTime: 1693487445608,
                receivedStatus: "W",
                energyOut: 2612131800
            },
            {
                readingTime: 1690817400000,
                serverTime: 1693487445608,
                receivedStatus: "W",
                energyOut: 2612046000
            },
            {
                readingTime: 1690816500000,
                serverTime: 1693487445608,
                receivedStatus: "W",
                energyOut: 2611960500
            }
        ];

        // Mock console.log to capture output
        const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();

        // Call the function under test
        getResult(readings);

        // Assertions
        // Check if the function logged the correct overall consumption
        expect(consoleLogMock).toHaveBeenCalledWith('The overall electricity consumption for the month of July 2023 is', '7836,14 kWh');
        // Check if the function logged the correct maximum power
        expect(consoleLogMock).toHaveBeenCalledWith('The maximum power that was measured in the same month is', '2612,13 kWh');
        // Check if console.log was called exactly 2 times
        expect(consoleLogMock).toHaveBeenCalledTimes(2);

        // Restore mock
        consoleLogMock.mockRestore();
    });
});
