import { readFileSync } from 'fs'


/**
 * Reads the contents of a file and returns it as a string.
 *
 * @remarks
 * If the file does not exist, the process will exit with exit code 1
 *
 * @param filename - The path to the file to be read.
 * @returns The contents of the file as a string.
 */
export function readFile (filename: string): string | void {
  try {
    // Read the provided filepath
    return readFileSync(filename, 'utf8')
  } catch (error) {
    // Cast the error to a Node Exception as error is unknown
    const e = error as NodeJS.ErrnoException
    // if file doesnt exist
    if (e.code === 'ENOENT') {
      console.error(`File "${filename}" not found`)
    } else {
      // if any other error occured
      console.error(`Error reading "${filename}"`)
    }
    // exit the process with exit code 1
    process.exit(1)
  }
}


/**
 * Retrieves the filename from the command line arguments.
 *
 * @remarks
 * If no filename is provided or the filename does not have a .txt extension,
 * the process will exit with exit code 9 (Invalid Argument).
 *
 * @returns The filename as a string, or void if an error occurred.
 */
export function getFileNameFromArgs (): string {
  const filename: string = process.argv[2] || ''
  if (filename === '') {
    console.error('Please provide a filename "node-ts src/index.ts <filename>"')
    process.exit(9) // Exit Code 9: Invalid Argument
  }
  if (!filename.endsWith('.txt')) {
    console.error('Please provide a filename with the .txt extension')
    process.exit(9) // Exit Code 9: Invalid Argument
  }
  return filename
}
