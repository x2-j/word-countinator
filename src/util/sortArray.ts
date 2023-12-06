import { StoreObject, StoreArray } from '@interface/store'


/**
 * Sorts the given store object by count and returns an array of [word, count] tuples.
 * The sorting is done in descending order of count, with words sorted alphabetically for each count.
 *
 * @param store - The store object containing words as keys and their corresponding counts as values.
 * @returns An array of [word, count] tuples sorted by count and word.
 */
export default function sortArray(store: StoreObject): StoreArray {
  return Object.entries(store).sort(
    (a, b) => {
      // If the count is the same then check word instead
      if (a[1] === b[1]) {
        // Can get speed up with collator/intl.collator if language matters
        return b[0].localeCompare(a[0])
      }
      // Count is different so compare by count
      return a[1] - b[1]
    }
  ).reverse()
}


/**
 * Sorts the given store object by word and returns an array of [word, count] tuples.
 * The sorting is done alphabetically by word.
 *
 * @param store - The store object containing words as keys and their corresponding counts as values.
 * @returns An array of [word, count] tuples sorted by word.
 */
export function sortArrayByWord(store: StoreObject): StoreArray {
  return Object.entries(store).sort((a, b) => {
    // Compare the words alphabetically
    return a[0].localeCompare(b[0])
  })
}


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
export function sortByArg(store: StoreObject, arg: string): StoreArray {
  if (['--a', '--alpha', '--alphabetical'].includes(arg)) {
    return sortArrayByWord(store)
  }
  return sortArray(store)
}
