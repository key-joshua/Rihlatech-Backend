"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../../../database/models"));
const createTask = async (body) => {
    return await models_1.default.Task.create(body);
};
const getTasks = async () => {
    return await models_1.default.Task.findAll();
};
const updateTask = async (id, attribute) => {
    await models_1.default.Task.update(attribute, { where: { id } });
};
const deleteTask = async (attribute) => {
    return await models_1.default.Task.destroy({ where: attribute });
};
exports.default = { createTask, getTasks, updateTask, deleteTask };
//# sourceMappingURL=tasks.js.map