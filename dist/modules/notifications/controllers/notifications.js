"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const notifications_1 = __importDefault(require("../repository/notifications"));
const createNotification = async (req, res) => {
    try {
        const notification = await notifications_1.default.createNotification(req.body);
        return res
            .status(http_status_codes_1.default.CREATED)
            .json({ status: http_status_codes_1.default.CREATED, message: 'Success.', data: { notification } });
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
const getNotifications = async (req, res) => {
    try {
        const notifications = await notifications_1.default.getNotifications();
        return res
            .status(http_status_codes_1.default.OK)
            .json({ status: http_status_codes_1.default.OK, message: 'Success.', data: { notifications } });
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
const updateNotification = async (req, res) => {
    try {
        const notifications = await notifications_1.default.updateNotification();
        return res
            .status(http_status_codes_1.default.OK)
            .json({ status: http_status_codes_1.default.OK, message: 'Success.', data: { notifications } });
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
exports.default = { createNotification, getNotifications, updateNotification };
//# sourceMappingURL=notifications.js.map