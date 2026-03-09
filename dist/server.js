"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const config_1 = require("./src/config/config");
function startServer() {
    const port = config_1.envConfig.portNumber;
    app_1.default.listen(port, function () {
        console.log(`Server has started at port ${port}`);
    });
}
startServer();
