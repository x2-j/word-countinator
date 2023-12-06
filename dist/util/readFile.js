"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileNameFromArgs = exports.readFile = void 0;
const fs_1 = require("fs");
/**
 * Reads the contents of a file and returns it as a string.
 *
 * @remarks
 * If the file does not exist, the process will exit with exit code 1
 *
 * @param filename - The path to the file to be read.
 * @returns The contents of the file as a string.
 */
function readFile(filename) {
    try {
        // Read the provided filepath
        return (0, fs_1.readFileSync)(filename, 'utf8');
    }
    catch (error) {
        // Cast the error to a Node Exception as error is unknown
        const e = error;
        // if file doesnt exist
        if (e.code === 'ENOENT') {
            console.error(`File "${filename}" not found`);
        }
        else {
            // if any other error occured
            console.error(`Error reading "${filename}"`);
        }
        process.exit(0);
    }
}
exports.readFile = readFile;
/**
 * Retrieves the filename from the command line arguments.
 *
 * @remarks
 * If no filename is provided or the filename does not have a .txt extension,
 * the process will exit with exit code 9 (Invalid Argument).
 *
 * @returns The filename as a string, or void if an error occurred.
 */
function getFileNameFromArgs() {
    const filename = process.argv[2] || '';
    if (filename === '') {
        console.error('Please provide a filename "node-ts src/index.ts <filename>"');
        process.exit(9); // Exit Code 9: Invalid Argument
    }
    if (!filename.endsWith('.txt')) {
        console.error('Please provide a filename with the .txt extension');
        process.exit(9); // Exit Code 9: Invalid Argument
    }
    return filename;
}
exports.getFileNameFromArgs = getFileNameFromArgs;
