import { readFileSync } from 'fs'

/**
 * Reads the contents of a file and returns it as a string. 
 * If the file does not exist, the process will exit with exit code 1
 * 
 * @param filename - The path to the file to be read.
 * @returns The contents of the file as a string.
 */
export default function readFile (filename: string): string {
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