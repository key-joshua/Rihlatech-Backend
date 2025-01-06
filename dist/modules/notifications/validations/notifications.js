"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const createNotificationSchema = joi_1.default.object({
    isRead: joi_1.default.boolean().required().messages({
        "any.required": "isRead is required",
        "boolean.base": "isRead should be a type of boolean",
    }),
    taskTitle: joi_1.default.string().optional().messages({
        "string.base": "taskTitle should be a type of string",
    }),
    timestamp: joi_1.default.date().required().messages({
        "any.required": "timestamp is required",
        "date.base": "timestamp should be a valid date",
    }),
    toStage: joi_1.default.string().optional().messages({
        "string.base": "toStage should be a type of string",
    }),
    fromStage: joi_1.default.string().optional().messages({
        "string.base": "fromStage should be a type of string",
    }),
    type: joi_1.default.string().required().valid("TASK_MOVED", "TASK_ASSIGNED", "STATUS_UPDATE").messages({
        "any.required": "type is required",
        "string.empty": "type cannot be empty",
        "string.base": "type should be a type of string",
        "any.only": "type must be one of 'TASK_MOVED', 'TASK_ASSIGNED', or 'STATUS_UPDATE'",
    }),
    message: joi_1.default.string().required().messages({
        "any.required": "message is required",
        "string.empty": "message cannot be empty",
        "string.base": "message should be a type of string",
    }),
});
const deleteNotificationSchema = joi_1.default.object({
    id: joi_1.default.string().required().messages({
        "any.required": "id is required",
        "string.empty": "id cannot be empty",
        "string.base": "id should be a type of string",
    }),
});
exports.default = { createNotificationSchema, deleteNotificationSchema };
//# sourceMappingURL=notifications.js.map