"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Normalises a word by removing punctuation and converting it to lowercase.
 *
 * @remarks
 * Apostrophes inside words are preserved.
 *
 * @param word - The word to be normalised.
 * @returns The normalised word.
 */
function normaliseWord(word) {
    return word.replace(/[^\w']/g, '').toLowerCase();
}
exports.default = normaliseWord;
