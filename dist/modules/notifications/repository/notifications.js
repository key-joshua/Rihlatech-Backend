"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../../../database/models"));
const createNotification = async (body) => {
    return await models_1.default.Notification.create(body);
};
const getNotifications = async () => {
    return await models_1.default.Notification.findAll();
};
const updateNotification = async () => {
    await models_1.default.Notification.update({ isRead: true }, { where: { isRead: false } });
    return await models_1.default.Notification.findAll();
};
exports.default = { createNotification, getNotifications, updateNotification };
//# sourceMappingURL=notifications.js.map