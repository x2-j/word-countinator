"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stores the normalised word in the provided store and returns the count.
 *
 * @remarks
 * If the word already exists in the store, the count is incremented.
 *
 * @param word - The word to be stored.
 * @param store - The store object to store the word and its count.
 * @returns The count of the stored word.
 */
function storeNormalised(key, store) {
    store[key] = (store[key] || 0) + 1;
    return store[key];
}
exports.default = storeNormalised;
