"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeParamsValidation = exports.routeBodyValidation = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const routeBodyValidation = (schema) => async (req, res, next) => {
    try {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errorMessage = `${error.details[0].message} in the body.`;
            return res
                .status(http_status_codes_1.default.BAD_REQUEST)
                .json({ status: http_status_codes_1.default.BAD_REQUEST, error: errorMessage });
        }
        return next();
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
exports.routeBodyValidation = routeBodyValidation;
const routeParamsValidation = (schema) => async (req, res, next) => {
    try {
        const { error } = schema.validate(req.params, { abortEarly: false });
        if (error) {
            const errorMessage = `${error.details[0].message} in the params.`;
            return res
                .status(http_status_codes_1.default.BAD_REQUEST)
                .json({ status: http_status_codes_1.default.BAD_REQUEST, error: errorMessage });
        }
        return next();
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
exports.routeParamsValidation = routeParamsValidation;
//# sourceMappingURL=middlewares.js.map