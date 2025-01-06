"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const db = {};
let sequelize;
const basename = path_1.default.basename(__filename);
const config = require('../../configs/config');
if (config.url) {
    exports.sequelize = sequelize = new sequelize_1.Sequelize(config.url, config);
}
else {
    if (!config.database || !config.username || !config.password) {
        throw new Error('Database configuration is incomplete.');
    }
    exports.sequelize = sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
fs_1.default.readdirSync(__dirname)
    .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts';
})
    .forEach((file) => {
    const modelPath = path_1.default.join(__dirname, file);
    const modelDefiner = require(modelPath).default;
    if (typeof modelDefiner === 'function') {
        const model = modelDefiner(sequelize, sequelize_1.DataTypes);
        db[model.name] = model;
    }
    else {
        if (file !== 'interfaces.ts')
            console.error(`The file ${file} does not export a function.`);
    }
});
Object.keys(db).forEach((modelName) => {
    const model = db[modelName];
    if (model.associate) {
        model.associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
exports.default = db;
//# sourceMappingURL=index.js.map