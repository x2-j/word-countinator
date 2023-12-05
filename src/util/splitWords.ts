import { StoreObject } from '@interface/store'

import storeNormalised from '@util/storeNormalised'


/**
 * Splits a string into words and stores them in a dictionary.
 *
 * @param str - The string to be split into words.
 * @returns The dictionary containing the normalised words as keys and their counts as values.
 */
export default function splitWords(str: string): StoreObject {
  const store: StoreObject = {}
  const words: string[] = str.split(/[^A-Za-z']/) // Split on non-word characters
  for (const word of words) {
    if (word !== '') {
      storeNormalised(word.toLowerCase(), store)
    }
  }
  return store
}
