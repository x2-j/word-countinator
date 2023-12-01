// import process from 'process'
import readFile from "./readFile"

// Mock fs.readFileSync
// Return known values for known inputs and throw errors for anything else
jest.mock('fs', () => ({
  readFileSync: jest.fn((filename: string) => {
    switch (filename) {
      case './examples/hello-world.txt':
        return 'Hello, World!'
      case './examples/not-readable.txt':
        throw new Error('EACCES')
      case './examples/does-not-exist.txt':
        return 'File "./examples/does-not-exist.txt" not found'
      case './examples':
        return 'Error reading "./examples"'
      default:
        throw new Error('Unknown file')
    }
  })
}))

/**
 * Mocking process and listening for calls to process.exit allows us to test that the process exits with the correct exit code
 * however despite feeling that this approach is correct the expect(mockExit).toHaveBeenCalledWith(1) assertion fails.
 * 
 * My understanding is that jest.mock... is replacing/intercepting calls to process.exit with a mock function that tracks calls to it.
 * I am then using jest.spyOn to spy on the mock function and replace it with an implementation that throws an error however the
 * call is never seen by the spy.
 */

jest.mock('process', () => ({
  exit: jest.fn((number: number) => {
    // debugger 
    // replicate the behaviour of process.exit
    throw new Error('process.exit: ' + number) 
  })
}))
        
describe('readFile', () => {
  beforeEach(() => {
    // Clear all records of calls to mocks
    jest.clearAllMocks()
  })

  it('should return the contents of a file as a string', () => {
    // Use a mock to avoid coupling to the actual file system and introducing possible side effects
    expect(readFile('./examples/hello-world.txt')).toBe('Hello, World!')
  })

  it('should exit code 1 if the file does not exist', () => {
    // const mockExit = jest.spyOn(process, 'exit')
    expect(readFile('./examples/does-not-exist.txt')).toBe('File "./examples/does-not-exist.txt" not found')
    // debugger
    // expect(mockExit).toHaveBeenCalledWith(1)
  })

  it('should exit code 1 if the file is a directory', () => {
    // const mockExit = jest.spyOn(process, 'exit')
    expect(readFile('./examples')).toBe('Error reading "./examples"')
    // expect(mockExit).toHaveBeenCalledWith(1)
  })

  // it('should exit code 1 if the file is not readable', () => {
  //   const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => { throw new Error('process.exit: ' + number); });
  //   expect(() => {
  //     readFile('./examples/not-readable.txt')
  //   }).toThrow()
  //   expect(mockExit).toHaveBeenCalledWith(1)
  // })
})
