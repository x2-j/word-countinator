import { StoreObject, StoreArray } from '@interface/store'

import { readFile, getFileNameFromArgs } from './util/readFile'
import splitWords from './util/splitWords'
import sortArray, { sortArrayByWord } from './util/sortArray'

// Start a store to cache each word and it's count
let store: StoreObject = {}

// Get contents of file as string
const fileName: string = getFileNameFromArgs()
const file: string = readFile(fileName)




store = splitWords(file)

let storeArray: StoreArray = []

if (process.argv[3] === '--alpha') {
  storeArray = sortArrayByWord(store)
} else {
  storeArray = sortArray(store)
}

for (const [word, count] of storeArray) {
  console.log(`${word}: ${count}`)
}



////////

