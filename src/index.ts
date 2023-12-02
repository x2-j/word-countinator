import StoreInterface from './interfaces/store'

import readFile from './util/readFile'
import splitWords from './util/splitWords'
import sortArray, { sortArrayByWord } from './util/sortArray'

// Get the third argument from the command line as filename
const filename: string = process.argv[2]
// If no filename is provided, log an error and exit the process
if (!filename || filename.length === 0) {
  console.error('Please provide a filename "node-ts src/index.ts <filename>"')
  process.exit(1)
}

// Start a store to cache each word and it's count
let store: StoreInterface = {}

// Get contents of file as string
const file: string = readFile(filename)

// Redelcare store rather than passing the instance and mutating it
store = splitWords(file)

let arr: [string, number][] = []

if (process.argv[3] === '--alpha') {
  arr = sortArrayByWord(store)
} else {
  arr = sortArray(store)
}

for (const [word, count] of arr) {
  console.log(`${word}: ${count}`)
}
