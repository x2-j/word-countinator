import sortArray, { sortArrayByWord } from "./sortArray"

describe('sortArray', () => {
  it('should sort the array by count in descending order', () => {
    const store = {
      'foo': 1,
      'bar': 2,
      'baz': 3,
    }
    const result = sortArray(store)
    expect(result).toEqual([
      ['baz', 3],
      ['bar', 2],
      ['foo', 1],
    ])
  })
})

describe('sortArrayByWord', () => {
  it('should sort the array by word in ascending order', () => {
    const store = {
      'foo': 1,
      'bar': 2,
      'baz': 3,
    }
    const result = sortArrayByWord(store)
    expect(result).toEqual([
      ['bar', 2],
      ['baz', 3],
      ['foo', 1],
    ])
  })
})