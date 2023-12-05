/**
 * A store is a collection of words and their counts.
 *
 * @remarks
 * A store can be represented as an object or an array.
 *
 * @example
 * ```ts
 * const store: StoreObject = {
 *  'foo': 1,
 *  'bar': 2,
 *  'baz': 3
 * }
 * ```
 */
export interface StoreObject {
  [ key: string ]: number
}


/**
 * An iterable array of [word, count] tuples.
 *
 * @remarks
 * A store can be represented as an object or an array.
 *
 * @example
 * ```ts
 * const store: StoreArray = [
 *   ['foo', 1],
 *   ['bar', 2],
 *   ['baz', 3]
 * ]
 * ```
 */
export interface StoreArray extends Iterable<[string, number]> {
  [Symbol.iterator](): Iterator<[string, number]>
}
