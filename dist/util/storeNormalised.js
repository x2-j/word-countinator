"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stores the normalised word in the provided store and returns the count.
 * If the word already exists in the store, the count is incremented.
 * @param word - The word to be stored.
 * @param store - The store object to store the word and its count.
 * @returns The count of the stored word.
 */
function storeNormalised(word, store) {
    // Create or increment the count for the normalised
    // word, inline check if the word is not empty
    store[word] = (store[word] || 0) + 1;
    return store[word];
}
exports.default = storeNormalised;
