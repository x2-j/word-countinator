import { StoreArray } from '@interface/store'

import arrayToConsole from '@util/arrayToConsole'

describe('arrayToConsole', () => {
  it('should output the given array to the console as rows of "word: count"', () => {
    const arr: StoreArray = [['word', 1], ['word', 2], ['word', 3]]
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    arrayToConsole(arr)
    expect(consoleSpy).toHaveBeenCalledWith('word: 1')
    expect(consoleSpy).toHaveBeenCalledWith('word: 2')
    expect(consoleSpy).toHaveBeenCalledWith('word: 3')
    consoleSpy.mockRestore()
  })
})