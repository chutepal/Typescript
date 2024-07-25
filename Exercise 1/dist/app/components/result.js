"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResult = void 0;
const unitConversion_1 = require("../shared/utils/unitConversion");
const getResult = (readings) => {
    let overallConsumption = 0;
    let maxConsumption = 0;
    for (let i = 1; i < readings.length; i++) {
        const powerConsumed = readings[i].energyOut - readings[i - 1].energyOut;
        if (powerConsumed > maxConsumption) {
            maxConsumption = powerConsumed;
        }
        overallConsumption += powerConsumed;
    }
    console.log('The overall electricity consumption for the month of July 2023 is', unitConversion_1.unitConversion.convertmWhTokWh(overallConsumption));
    console.log('The maximum power that was measured in the same month is', unitConversion_1.unitConversion.convertmWhTokWh(maxConsumption));
};
exports.getResult = getResult;
