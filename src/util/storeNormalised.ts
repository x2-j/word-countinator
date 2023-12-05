import { StoreObject } from '@interface/store'


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
export default function storeNormalised(key: string, store: StoreObject): number {
  store[key] = (store[key] || 0) + 1
  return store[key]
}
