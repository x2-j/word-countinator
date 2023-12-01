import readFile from "./readFile"

// Mock fs.readFileSync
jest.mock('fs', () => ({
  readFileSync: jest.fn((filename: string) => {
    if (filename === './examples/hello-world.txt') {
      return 'Hello, World!'
    } else if (filename === './examples/not-readable.txt') {
      return { code: 'ENOENT' }
    }
  })
}))

const processExit = jest.spyOn(process, 'exit').mockImplementation()
const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation()
const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()
        
describe('readFile', () => {
  beforeEach(() => {
    processExit.mockClear()
    consoleLogSpy.mockClear()
    consoleErrorSpy.mockClear()
  })

  it('should return the contents of a file as a string', () => {
    expect(readFile('./examples/hello-world.txt')).toBe('Hello, World!')
  })

  // it('should exit code 1 if the file does not exist', async () => {
  //   readFile('./examples/does-not-exist.txt')
  //   expect(mockExit).toHaveBeenCalledWith(1)
  //   expect(consoleErrorSpy).toHaveBeenCalledWith('File "./examples/does-not-exist.txt" not found')
  // })

  // it('should exit code 1 if the file is a directory', () => {
  //   const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => { throw new Error('process.exit: ' + number); });
  //   expect(() => {
  //     readFile('./examples')
  //   }).toThrow()
  //   expect(mockExit).toHaveBeenCalledWith(1)
  // })

  // it('should exit code 1 if the file is not readable', () => {
  //   const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => { throw new Error('process.exit: ' + number); });
  //   expect(() => {
  //     readFile('./examples/not-readable.txt')
  //   }).toThrow()
  //   expect(mockExit).toHaveBeenCalledWith(1)
  // })
})
