"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrls = void 0;
exports.apiUrls = {
    userLogin: 'auth/login',
    refreshAccessToken: 'auth/refresh',
    allMeteringPoints: 'meteringpoints',
    definedRangeReading: (uuid) => `meteringpoints/${uuid}/readings`
};
