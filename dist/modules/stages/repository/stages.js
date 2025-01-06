"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../../../database/models"));
const createStage = async (body) => {
    return await models_1.default.Stage.create(body);
};
const getStages = async () => {
    return await models_1.default.Stage.findAll();
};
const deleteStage = async (attribute) => {
    return await models_1.default.Stage.destroy({ where: attribute });
};
exports.default = { createStage, getStages, deleteStage };
//# sourceMappingURL=stages.js.map