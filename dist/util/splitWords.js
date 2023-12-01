"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const normaliseWord_1 = __importDefault(require("./normaliseWord"));
const storeNormalised_1 = __importDefault(require("./storeNormalised"));
/**
 * Splits a string into words and stores them in a dictionary.
 *
 * @param str - The string to be split into words.
 * @returns The dictionary containing the normalised words as keys and their counts as values.
 */
function splitWords(str) {
    const store = {};
    // The \s in the regular expression matches any whitespace (spaces, tabs, line breaks)
    // The + means "one or more of the preceding elements"
    str.split(/\s+/).map((word) => {
        const normalised = (0, normaliseWord_1.default)(word);
        // If the word is empty skip it
        if (!normalised || normalised.length === 0) {
            return;
        }
        // If the word is a number skip it
        if (normalised.match(/^\d+$/)) {
            return;
        }
        (0, storeNormalised_1.default)(normalised, store);
    });
    return store;
}
exports.default = splitWords;
