"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readFile_1 = __importDefault(require("./util/readFile"));
const splitWords_1 = __importDefault(require("./util/splitWords"));
const sortArray_1 = __importStar(require("./util/sortArray"));
// Get the third argument from the command line as filename
const filename = process.argv[2];
// If no filename is provided, log an error and exit the process
if (!filename || filename.length === 0) {
    console.error('Please provide a filename "node-ts src/index.ts <filename>"');
    process.exit(1);
}
// Start a store to cache each word and it's count
let store = {};
// Get contents of file as string
const file = (0, readFile_1.default)(filename);
// Redelcare store rather than passing the instance and mutating it
store = (0, splitWords_1.default)(file);
// Sort the store by count in descending order or alphabetically
let arr = [];
// If the last argument is --numeric, sort by count
if (process.argv[3] === '--alpha') {
    arr = (0, sortArray_1.sortArrayByWord)(store);
}
else {
    arr = (0, sortArray_1.default)(store);
}
for (const [word, count] of arr) {
    // Log the results!
    console.log(`${word}: ${count}`);
}
