"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readFile_1 = require("@util/readFile");
const splitWords_1 = __importDefault(require("@util/splitWords"));
const sortArray_1 = require("@util/sortArray");
const arrayToConsole_1 = __importDefault(require("@util/arrayToConsole"));
const fileName = (0, readFile_1.getFileNameFromArgs)();
const fileContents = (0, readFile_1.readFile)(fileName);
const wordObjectStore = (0, splitWords_1.default)(fileContents);
const storeArray = (0, sortArray_1.sortByArg)(wordObjectStore, (process.argv[3] || 'count'));
(0, arrayToConsole_1.default)(storeArray);
