"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = __importDefault(require("./tasks"));
const stages_1 = __importDefault(require("./stages"));
const notifications_1 = __importDefault(require("./notifications"));
const router = (0, express_1.Router)();
router.use('/tasks', tasks_1.default);
router.use('/stages', stages_1.default);
router.use('/notifications', notifications_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map