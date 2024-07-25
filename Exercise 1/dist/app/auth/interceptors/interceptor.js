"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupInterceptor = void 0;
const axios_1 = __importDefault(require("axios"));
const api_url_config_1 = require("../../shared/configs/api-url.config");
const setupInterceptor = (loginResponse) => {
    let retry = false;
    axios_1.default.interceptors.response.use(response => {
        return response;
    }, error => {
        var _a;
        if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 401 && !retry) {
            retry = true;
            return axios_1.default.post(api_url_config_1.apiUrls.refreshAccessToken, { refreshToken: loginResponse.tokens.refreshToken })
                .then(refreshResponse => {
                if (refreshResponse.status === 200) {
                    axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${refreshResponse.data.token}`;
                    return (0, axios_1.default)(error.config);
                }
            })
                .catch(refreshError => {
                var _a, _b;
                throw new Error(`${error.code} ${((_b = (_a = refreshError.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || refreshError.message}`);
            });
        }
        throw new Error(error);
    });
};
exports.setupInterceptor = setupInterceptor;
