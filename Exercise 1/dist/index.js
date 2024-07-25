"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./app/data/constants");
const measurement_1 = require("./app/components/measurement");
const result_1 = require("./app/components/result");
const login_1 = require("./app/auth/login/login");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        axios_1.default.defaults.baseURL = constants_1.baseUrl;
        const loginResponse = yield (0, login_1.loginUser)();
        const uuid = yield measurement_1.measurements.getMeteringPoints();
        const readings = yield measurement_1.measurements.getReadings(uuid, constants_1.timeRange.startTime, constants_1.timeRange.endTime);
        (0, result_1.getResult)(readings);
    }
    catch (error) {
        throw new Error(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || error.message);
    }
});
main();
