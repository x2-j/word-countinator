import { readFile, getFileNameFromArgs } from "./readFile"


// Mock fs.readFileSync
// Return known values for known inputs and throw errors for anything else
jest.mock('fs', () => ({
  readFileSync: jest.fn((filename: string) => {
    switch (filename) {
      case './examples/hello-world.txt':
        return 'Hello, World!'
      case './examples/not-readable.txt':
        console.error('Error reading "./examples/not-readable.txt"')
        process.exit(0)
      case './examples/does-not-exist.txt':
        console.error('File "./examples/does-not-exist.txt" not found')
        process.exit(0)
      case './examples':
        console.error('Error reading "./examples"')
        process.exit(0)
      default:
        throw new Error('Unknown file')
    }
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
    const mockExit = jest.spyOn(process, 'exit').mockImplementation()
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation()
    readFile('./examples/does-not-exist.txt')
    expect(mockExit).toHaveBeenCalledWith(0)
    expect(mockConsoleError).toHaveBeenCalledWith('File "./examples/does-not-exist.txt" not found')
  })

  it('should exit code 1 if the file is a directory', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation()
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation()
    readFile('./examples')
    expect(mockExit).toHaveBeenCalledWith(0)
    expect(mockConsoleError).toHaveBeenCalledWith('Error reading "./examples"')
  })

  it('should exit code 1 if the file is not readable', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation()
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation()
    readFile('./examples/not-readable.txt')
    expect(mockExit).toHaveBeenCalledWith(0)
    expect(mockConsoleError).toHaveBeenCalledWith('Error reading "./examples/not-readable.txt"')
  })
})


describe('getFileNameFromArgs', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return the filename if it is provided and has a .txt extension', () => {
    process.argv = ['', '', './examples/hello-world.txt']
    expect(getFileNameFromArgs()).toBe('./examples/hello-world.txt')
  })

  it('should exit code 9 if no filename is provided', () => {
    process.argv = ['', '']
    const mockExit = jest.spyOn(process, 'exit').mockImplementation()
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation()
    getFileNameFromArgs()
    expect(mockExit).toHaveBeenCalledWith(9)
    expect(mockConsoleError).toHaveBeenCalledWith('Please provide a filename "node-ts src/index.ts <filename>"')
  })

  it('should exit code 9 if the filename does not have a .txt extension', () => {
    process.argv = ['', '', './examples/hello-world']
    const mockExit = jest.spyOn(process, 'exit').mockImplementation()
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation()
    getFileNameFromArgs()
    expect(mockExit).toHaveBeenCalledWith(9)
    expect(mockConsoleError).toHaveBeenCalledWith('Please provide a filename with the .txt extension')
  })
})
