"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = __importDefault(require("../modules/tasks/controllers/tasks"));
const tasks_2 = __importDefault(require("../modules/tasks/validations/tasks"));
const middlewares_1 = require("../middlewares/middlewares");
const router = (0, express_1.Router)();
router.get('/', tasks_1.default.getTasks);
router.post('/', (0, middlewares_1.routeBodyValidation)(tasks_2.default.createTaskSchema), tasks_1.default.createTask);
router.delete('/:id', (0, middlewares_1.routeParamsValidation)(tasks_2.default.updateDeleteTaskSchema), tasks_1.default.deleteTask);
router.patch('/:id', (0, middlewares_1.routeParamsValidation)(tasks_2.default.updateDeleteTaskSchema), (0, middlewares_1.routeBodyValidation)(tasks_2.default?.updateTaskSchema), tasks_1.default.updateTask);
exports.default = router;
//# sourceMappingURL=tasks.js.map