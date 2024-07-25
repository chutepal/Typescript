"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unitConversion_1 = require("../../app/shared/utils/unitConversion");
describe('utils module', () => {
    describe('convertmWhTokWh function', () => {
        it('should convert energy from mWh to kWh and format the result correctly', () => {
            const powerInmWh = 1234567;
            const expectedOutput = '1,23 kWh';
            const result = unitConversion_1.unitConversion.convertmWhTokWh(powerInmWh);
            expect(result).toEqual(expectedOutput);
        });
    });
});
