"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const tasks_1 = __importDefault(require("../repository/tasks"));
const createTask = async (req, res) => {
    try {
        const task = await tasks_1.default.createTask(req.body);
        return res
            .status(http_status_codes_1.default.CREATED)
            .json({ status: http_status_codes_1.default.CREATED, message: 'Success.', data: { task } });
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
const getTasks = async (req, res) => {
    try {
        const tasks = await tasks_1.default.getTasks();
        return res
            .status(http_status_codes_1.default.OK)
            .json({ status: http_status_codes_1.default.OK, message: 'Success.', data: { tasks } });
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
const updateTask = async (req, res) => {
    try {
        const task = await tasks_1.default.updateTask(req.params.id, req.body);
        return res
            .status(http_status_codes_1.default.OK)
            .json({ status: http_status_codes_1.default.OK, message: 'Success.', data: { task } });
    }
    catch (error) {
        return res
            .status(error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR)
            .json({ status: error?.status || http_status_codes_1.default.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};
const deleteTask = async (req, res) => {
    try {
        await tasks_1.default.deleteTask(req.params);
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
exports.default = { createTask, getTasks, updateTask, deleteTask };
//# sourceMappingURL=tasks.js.map