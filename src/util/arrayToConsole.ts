import { StoreArray } from '@interface/store'


/**
 * Outputs the given array to the console as rows of "word: count".
 *
 * @param arr - The array to output to the console.
 */
export default function arrayToConsole (arr: StoreArray) {
  for (const [word, count] of arr) {
    console.log(`${word}: ${count}`)
  }
}
