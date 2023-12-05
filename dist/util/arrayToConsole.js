"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Outputs the given array to the console as rows of "word: count".
 *
 * @param arr - The array to output to the console.
 */
function arrayToConsole(arr) {
    for (const [word, count] of arr) {
        console.log(`${word}: ${count}`);
    }
}
exports.default = arrayToConsole;
