"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
module.exports = {
    database: process.env.DB_POSTGRESQL_DATABASE,
    username: process.env.DB_POSTGRESQL_USERNAME,
    password: process.env.DB_POSTGRESQL_PASSWORD,
    user: process.env.DB_POSTGRESQL_USERNAME,
    port: process.env.DB_POSTGRESQL_PORT,
    host: process.env.DB_POSTGRESQL_HOST,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
};
//# sourceMappingURL=config.js.map