"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitConversion = void 0;
exports.unitConversion = {
    convertmWhTokWh: (power) => {
        const kWh = power / 1000000;
        const formattedKWh = kWh.toFixed(2);
        const formattedKWhWithComma = formattedKWh.replace('.', ',');
        return `${formattedKWhWithComma} kWh`;
    }
};
