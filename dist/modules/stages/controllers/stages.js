"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const stages_1 = __importDefault(require("../repository/stages"));
const createStage = async (req, res) => {
    try {
        const stage = await stages_1.default.createStage(req.body);
        return res
            .status(http_status_codes_1.default.CREATED)
            .json({ status: http_status_codes_1.default.CREATED, message: 'Success.', data: { stage } });
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
const getStages = async (req, res) => {
    try {
        const stages = await stages_1.default.getStages();
        return res
            .status(http_status_codes_1.default.OK)
            .json({ status: http_status_codes_1.default.OK, message: 'Success.', data: { stages } });
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
const deleteStage = async (req, res) => {
    try {
        await stages_1.default.deleteStage(req.params);
        return res
            .status(http_status_codes_1.default.OK)
            .json({ status: http_status_codes_1.default.OK, message: 'Success.' });
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
exports.default = { createStage, getStages, deleteStage };
//# sourceMappingURL=stages.js.map