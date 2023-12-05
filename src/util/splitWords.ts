import { StoreObject } from '@interface/store'

import normaliseWord from '@util/normaliseWord'
import storeNormalised from '@util/storeNormalised'


/**
 * Splits a string into words and stores them in a dictionary.
 *
 * @param str - The string to be split into words.
 * @returns The dictionary containing the normalised words as keys and their counts as values.
 */
export default function splitWords(str: string): StoreObject {
  const store: StoreObject = {}
  const words: string[] = str.split(/\W+/) // Split on non-word characters

  for (const word of words) {
    const normalised = normaliseWord(word)
    // If the word is empty or only contains numbers, don't store it
    // if (!normalised || normalised.match(/^\d+$/)) {
    //   return
    // }
    storeNormalised(normalised, store)
  }
  return store
}
