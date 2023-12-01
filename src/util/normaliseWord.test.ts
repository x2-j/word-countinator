import normaliseWord from './normaliseWord'

describe('normaliseWord', () => {
  it('should lowercase the word', () => {
    expect(normaliseWord('HELLO')).toBe('hello')
  })

  it('should remove punctuation', () => {
    expect(normaliseWord('Hello,')).toBe('hello')
  })

  it('should keep apostrophes inside words', () => {
    expect(normaliseWord("I'm")).toBe("i'm")
  })
})