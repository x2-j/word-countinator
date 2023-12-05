import { readFileSync } from 'fs'

/**
 * Reads the contents of a file and returns it as a string. 
 * If the file does not exist, the process will exit with exit code 1
 * 
 * @param filename - The path to the file to be read.
 * @returns The contents of the file as a string.
 */
export function readFile (filename: string): string {
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


export function getFileNameFromArgs (): string {
  // Get the third argument from the command line as filename
  const filename: string = process.argv[2]
  
  if (!filename) { // Remove filename.length as it is redundant here
    console.error('Please provide a filename "node-ts src/index.ts <filename>"')
    process.exit(1)
  }
  return filename
}