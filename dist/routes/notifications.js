"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares/middlewares");
const notifications_1 = __importDefault(require("../modules/notifications/validations/notifications"));
const notifications_2 = __importDefault(require("../modules/notifications/controllers/notifications"));
const router = (0, express_1.Router)();
router.get('/', notifications_2.default.getNotifications);
router.patch('/', notifications_2.default.updateNotification);
router.post('/', (0, middlewares_1.routeBodyValidation)(notifications_1.default.createNotificationSchema), notifications_2.default.createNotification);
exports.default = router;
//# sourceMappingURL=notifications.js.map