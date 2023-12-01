import StoreInterface from '../interfaces/store'

import normaliseWord from './normaliseWord'
import storeNormalised from './storeNormalised'

/**
 * Splits a string into words and stores them in a dictionary.
 * 
 * @param str - The string to be split into words.
 * @returns The dictionary containing the normalised words as keys and their counts as values.
 */
export default function splitWords(str: string): StoreInterface {
  const store: StoreInterface = {}
  // The \s in the regular expression matches any whitespace (spaces, tabs, line breaks)
  // The + means "one or more of the preceding elements"
  str.split(/\s+/).map((word: string) => {
    const normalised = normaliseWord(word)
    // If the word is empty skip it
    if (!normalised || normalised.length === 0) {
      return
    }
    // If the word is a number skip it
    if (normalised.match(/^\d+$/)) {
      return
    }
    storeNormalised(normalised, store)
  })
  return store
}