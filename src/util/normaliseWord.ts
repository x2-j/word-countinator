/**
 * Normalises a word by removing punctuation and converting it to lowercase.
 *
 * @remarks
 * Apostrophes inside words are preserved.
 *
 * @param word - The word to be normalised.
 * @returns The normalised word.
 */
export default function normaliseWord(word: string): string {
  return word.toLowerCase()
}
