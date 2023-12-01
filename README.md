# Word Countinator

![NODE CI](https://github.com/x2-j/Word-Countinator/actions/workflows/tests.yml/badge.svg)

Word Countinator is a simple Typescript application for sorting a text file into a list of how often each word in the file is used.

## Install
Getting Word Countinator up and running is nice and simple. 

 - Dont have TS-Node already? Please consider installing TS-Node https://github.com/TypeStrong/ts-node or use the instructions for running the bundled dist files directly.
 - Then as expected:
 -- `npm install`
 - Give it a few seconds to install all the dependencies and move on to Run instructions below.

## Run
### Run as Typescript
Using TS-Node we can run the Typescript directly using:
`ts-node ./src/index.ts <filename>`

### Run from Dist
The repo contains a pre-built dist build that can be run directly using node:
`node dist/index.js <filename>`

### --alpha Parameter
You can include --alpha as the last parameter to format the entire list in alphabetical order rather than in the order of most to least used.

`ts-node ./src/index.ts <filename> --alpha`

## Test
Using JEST we can test that our methods work as expected. To run the tests simply run the command:
`npm run test`

## Lint
The codebase is linted with ESLint, making sure the code is consistent and following our defined rules. Run the linter with:
`npm run lint`

## Documentation
Each method is documented with TSDoc and respective documentation can be found about each method or as IntelliSense popups in your IDE.

## Example Files
I have included some example files in `/examples`

- `ts-node src/index.ts examples/rat-race.txt`
- `ts-node src/index.ts examples/test-requirements.txt`

## Lacking Points
- Test coverage and scope of what is being tested
- I could'nt get Jest mocks working in the time I had remaining
- It would have been nice to add the configuration for adding it to the NPM repository