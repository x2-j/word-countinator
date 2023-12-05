import { StoreObject, StoreArray } from 'interfaces/store'

/**
 * Sorts the given store object by count and returns an array of [word, count] tuples.
 * The sorting is done in descending order of count, with words sorted alphabetically for each count.
 * 
 * @param store - The store object containing words as keys and their corresponding counts as values.
 * @returns An array of [word, count] tuples sorted by count and word.
 */
export default function sortArray(store: StoreObject): StoreArray {
  // Create a cache of the words by count using count as key and array of instances
  const cache: { [key: number]: string[] } = {}
  for (const [word, count] of Object.entries(store)) {
    if (!cache[count]) {
      cache[count] = []
    }
    cache[count].push(word)
  }
  // Start output array
  const arr: StoreArray = []
  // Reverse the cache so the highest count is first
  for (const [count, words] of Object.entries(cache).reverse()) {
    words.sort((a, b) => {
      // Compare the words alphabetically for each count object to ensure alphabetical order
      return a.localeCompare(b)
    })
    for (const word of words) {
      arr.push([word, parseInt(count)])
    }
  }
  return arr
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