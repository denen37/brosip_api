"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const fs_1 = __importDefault(require("fs"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const log = (log) => __awaiter(void 0, void 0, void 0, function* () {
    const datetime = `${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
    const logItem = `${datetime}\t${log}\n`;
    console.log(logItem);
    try {
        if (!fs_1.default.existsSync(path_1.default.join(__dirname, '../logs'))) {
            yield promises_1.default.mkdir(path_1.default.join(__dirname, '../logs'));
        }
        yield promises_1.default.appendFile(path_1.default.join(__dirname, '../logs', 'server.log'), logItem);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = log;
