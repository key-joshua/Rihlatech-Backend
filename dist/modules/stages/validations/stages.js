"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const createStageSchema = joi_1.default.object({
    title: joi_1.default.string().required().messages({
        "any.required": "title is required",
        "string.empty": "title cannot be empty",
        "string.base": "title should be a type of string",
    }),
    description: joi_1.default.string().required().messages({
        "any.required": "description is required",
        "string.empty": "description cannot be empty",
        "string.base": "description should be a type of string",
    }),
});
const deleteStageSchema = joi_1.default.object({
    id: joi_1.default.string().required().messages({
        "any.required": "id is required",
        "string.empty": "id cannot be empty",
        "string.base": "id should be a type of string",
    }),
});
exports.default = { createStageSchema, deleteStageSchema };
//# sourceMappingURL=stages.js.map