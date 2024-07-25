"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_1 = require("../../app/components/result");
describe('getResult function', () => {
    it('should calculate overall and maximum consumption correctly', () => {
        const readings = [
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
        const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
        (0, result_1.getResult)(readings);
        expect(consoleLogMock).toHaveBeenCalledWith('The overall electricity consumption for the month of July 2023 is', '7836,14 kWh');
        expect(consoleLogMock).toHaveBeenCalledWith('The maximum power that was measured in the same month is', '2612,13 kWh');
        expect(consoleLogMock).toHaveBeenCalledTimes(2);
        consoleLogMock.mockRestore();
    });
});
