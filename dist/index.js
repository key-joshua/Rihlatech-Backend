"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', routes_1.default);
app.get('**', (req, res) => {
    return res.status(http_status_codes_1.default.NOT_FOUND).json({ status: http_status_codes_1.default.NOT_FOUND, message: 'WELCOME TO THE RIHLATECH MANAGEMENT TOOL.' });
});
app.post('**', (req, res) => {
    return res.status(http_status_codes_1.default.NOT_FOUND).json({ status: http_status_codes_1.default.NOT_FOUND, message: 'WELCOME TO THE RIHLATECH MANAGEMENT TOOL.' });
});
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map