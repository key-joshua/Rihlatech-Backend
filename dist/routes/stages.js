"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stages_1 = __importDefault(require("../modules/stages/controllers/stages"));
const stages_2 = __importDefault(require("../modules/stages/validations/stages"));
const middlewares_1 = require("../middlewares/middlewares");
const router = (0, express_1.Router)();
router.get('/', stages_1.default.getStages);
router.post('/', (0, middlewares_1.routeBodyValidation)(stages_2.default.createStageSchema), stages_1.default.createStage);
router.delete('/:id', (0, middlewares_1.routeParamsValidation)(stages_2.default.deleteStageSchema), stages_1.default.deleteStage);
exports.default = router;
//# sourceMappingURL=stages.js.map