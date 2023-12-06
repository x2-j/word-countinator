import { StoreObject as StoreObjectInterface, StoreArray as StoreArrayInterface } from '@interface/store'

import { readFile, getFileNameFromArgs } from '@util/readFile'
import splitWords from '@util/splitWords'
import { sortByArg } from '@util/sortArray'
import arrayToConsole from '@util/arrayToConsole'

const fileName: string = getFileNameFromArgs()
const fileContents: string = readFile(fileName)
const wordObjectStore: StoreObjectInterface = splitWords(fileContents)
const storeArray: StoreArrayInterface = sortByArg(wordObjectStore, (process.argv[3] || 'count'))

arrayToConsole(storeArray)
