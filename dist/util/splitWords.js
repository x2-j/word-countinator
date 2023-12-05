"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storeNormalised_1 = __importDefault(require("@util/storeNormalised"));
/**
 * Splits a string into words and stores them in a dictionary.
 *
 * @param str - The string to be split into words.
 * @returns The dictionary containing the normalised words as keys and their counts as values.
 */
function splitWords(str) {
    const store = {};
    const words = str.split(/[^A-Za-z']/); // Split on non-word characters
    for (const word of words) {
        if (word !== '') {
            (0, storeNormalised_1.default)(word.toLowerCase(), store);
        }
    }
    return store;
}
exports.default = splitWords;
