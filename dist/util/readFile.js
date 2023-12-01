"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
/**
 * Reads the contents of a file and returns it as a string.
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
        // exit the process with exit code 1
        process.exit(1);
    }
}
exports.default = readFile;
