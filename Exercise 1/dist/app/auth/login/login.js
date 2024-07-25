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
exports.loginUser = void 0;
const axios_1 = __importDefault(require("axios"));
const api_url_config_1 = require("../../shared/configs/api-url.config");
const interceptor_1 = require("../interceptors/interceptor");
const credentials_1 = require("../../data/credentials");
const loginUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.post(api_url_config_1.apiUrls.userLogin, credentials_1.userCredentials)
        .then((response) => {
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${response.data.tokens.accessToken}`;
        (0, interceptor_1.setupInterceptor)(response.data);
        return Promise.resolve(response.data);
    })
        .catch((error) => {
        var _a, _b;
        throw new Error(`${error.code} User login failed: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || error.message}`);
    });
});
exports.loginUser = loginUser;
