import splitWords from "./splitWords"

describe('splitWords', () => {
  it('should split a string into words', () => {
    const str = 'one two three'
    const store = splitWords(str)
    expect(store).toEqual({
      one: 1,
      two: 1,
      three: 1,
    })
  })
  it('should split a string into words and count duplicates', () => {
    const str = 'one two three two'
    const store = splitWords(str)
    expect(store).toEqual({
      one: 1,
      two: 2,
      three: 1,
    })
  })
  it('should split a string into words and ignore case', () => {
    const str = 'one TWO THREE two'
    const store = splitWords(str)
    expect(store).toEqual({
      one: 1,
      two: 2,
      three: 1,
    })
  })
  it('should split a string into words and ignore punctuation', () => {
    const str = 'one two, three   two'
    const store = splitWords(str)
    expect(store).toEqual({
      one: 1,
      two: 2,
      three: 1,
    })
  })
})