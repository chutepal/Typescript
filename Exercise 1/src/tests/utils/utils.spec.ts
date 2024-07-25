import { unitConversion } from "../../app/shared/utils/unitConversion";

// Describe block for the utils module
describe('utils module', () => {
    // Describe block for the convertmWhTokWh function
    describe('convertmWhTokWh function', () => {
        // Test case for converting energy from mWh to kWh
        it('should convert energy from mWh to kWh and format the result correctly', () => {
            // Test input value in milliwatt-hours (mWh)
            const powerInmWh = 1234567;

            // Expected output value in kilowatt-hours (kWh)
            const expectedOutput = '1,23 kWh';

            // Call the function under test
            const result = unitConversion.convertmWhTokWh(powerInmWh);

            // Assertion to check if the result matches the expected output
            expect(result).toEqual(expectedOutput);
        });
    });
});
