"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const normaliseWord_1 = __importDefault(require("@util/normaliseWord"));
const storeNormalised_1 = __importDefault(require("@util/storeNormalised"));
/**
 * Splits a string into words and stores them in a dictionary.
 *
 * @param str - The string to be split into words.
 * @returns The dictionary containing the normalised words as keys and their counts as values.
 */
function splitWords(str) {
    const store = {};
    const words = str.split(/\W+/); // Split on non-word characters
    for (const word of words) {
        const normalised = (0, normaliseWord_1.default)(word);
        // If the word is empty or only contains numbers, don't store it
        // if (!normalised || normalised.match(/^\d+$/)) {
        //   return
        // }
        (0, storeNormalised_1.default)(normalised, store);
    }
    return store;
}
exports.default = splitWords;
