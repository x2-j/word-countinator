"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByArg = exports.sortArrayByWord = void 0;
/**
 * Sorts the given store object by count and returns an array of [word, count] tuples.
 * The sorting is done in descending order of count, with words sorted alphabetically for each count.
 *
 * @param store - The store object containing words as keys and their corresponding counts as values.
 * @returns An array of [word, count] tuples sorted by count and word.
 */
function sortArray(store) {
    // Create a cache of the words by count using count as key and array of instances
    const cache = {};
    for (const [word, count] of Object.entries(store)) {
        if (!cache[count]) {
            cache[count] = [];
        }
        cache[count].push(word);
    }
    // Start output array
    const arr = [];
    // Reverse the cache so the highest count is first
    for (const [count, words] of Object.entries(cache).reverse()) {
        words.sort((a, b) => {
            // Compare the words alphabetically for each count object
            return a.localeCompare(b);
        });
        for (const word of words) {
            Array.prototype.push.apply(arr, [[word, parseInt(count)]]);
        }
    }
    return arr;
}
exports.default = sortArray;
/**
 * Sorts the given store object by word and returns an array of [word, count] tuples.
 * The sorting is done alphabetically by word.
 *
 * @param store - The store object containing words as keys and their corresponding counts as values.
 * @returns An array of [word, count] tuples sorted by word.
 */
function sortArrayByWord(store) {
    return Object.entries(store).sort((a, b) => {
        // Compare the words alphabetically
        return a[0].localeCompare(b[0]);
    });
}
exports.sortArrayByWord = sortArrayByWord;
/**
 * Sorts the given store object by the given argument and returns an array of [word, count] tuples.
 *
 * @remarks
 * The sorting is done in descending order of count, with words sorted alphabetically for each count.
 *
 * @param store - The store object containing words as keys and their corresponding counts as values.
 * @param arg - The argument to sort by.
 * @returns An array of [word, count] tuples sorted by count and word.
 */
function sortByArg(store, arg) {
    if (['--a', '--alpha', '--alphabetical'].includes(arg)) {
        return sortArrayByWord(store);
    }
    return sortArray(store);
}
exports.sortByArg = sortByArg;
