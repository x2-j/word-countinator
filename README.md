# Word Countinator

![NODE CI](https://github.com/x2-j/Word-Countinator/actions/workflows/tests.yml/badge.svg)

Word Countinator is a simple Typescript application that outputs each word from a provided text file in the order of most to least used and how many times it is found. All words are normalised and conform to a strict structure to avoid duplicates - spaces are used to denote a word separation and **it is assumed that a UTF-8 encoded text file (.txt) less than 300mb is provided.**

A file limit of roughly 500mb is theoretically possible however my tests have only worked as far as 300mb. This could be a configuration limitation on my local environment (memory limit maybe).

![word-countinator-banner](https://github.com/x2-j/word-countinator/assets/108185965/0010b99b-46de-4da9-997e-53baec0af7a0)

## Install
Getting Word Countinator up and running is nice and simple. 

### Make a new directory
```bash
cd <path of your choice>
mkdir <name of your choice>
cd <path created above>
```

### Clone this repository
```bash
git clone https://github.com/x2-j/word-countinator.git .
```

### Install 
```bash
npm install
```

## Run

### Run as Typescript
Using [TS-Node](https://github.com/TypeStrong/ts-node) we can run the Typescript directly using:
```bash
npm run dev <filename>
// or
ts-node -r tsconfig-paths/register ./src/index.ts <filename>
```

### Run from Dist
The repo contains a pre-built dist build that can be run directly using node:
```bash
node dist/index.js <filename>
```

If you edit the Typescript then you can build new Javascript using:
```bash
npm run build
```

### --a --alpha --alphabetical Parameter
You can include --a --alpha or --alphabetical as the last parameter to format the entire list in alphabetical order rather than in the order of most to least used.
```bash
npm run dev <filename> --a
```

## Test
Using Jest we can test that our methods work as expected. To run the tests simply run the command:
```bash
npm run test
```

## Lint
The codebase is linted with ESLint, ensuring the code is consistent and follows our defined rules. Run the linter with:
```bash
npm run lint
```

## Documentation
Each method is documented with [TSDoc](https://tsdoc.org/) and respective documentation can be found about each method or as IntelliSense popups in your IDE.

## Example Files
I have included some example files in `/examples`

```bash
npm run dev examples/rat-race.txt
npm run dev examples/test-requirements.txt
```

## Lacking Points
- ~~Test coverage and scope of what is being tested.~~
  - Improved a bit but there are more scenarios that could be tested for.

- ~~I couldn't get Jest mocks working in the time I had remaining.~~
  - Resolved. I had implimented the mock functions wrong and had almost got it working the first time.
- It would have been nice to add the configuration for adding it to the NPM repository.
- ~~Interfaces in dist should be removed.~~
  - My head was in browser land having recently experimented with TS and a bundler. The interfaces are needed here as they are referenced in the built JS files.
- ~~index.ts could do with a refactor to move more code into modules for both testing and cleaning up the entry point file.~~
- ~~The store reference in index.js is reassigned but in some modules the property is passed, thus causing inconsistency in approach.~~
  - I've been mulling over the idea of implimenting a store singleton pattern to handle this centrally with get and set in class syntax.

```typescript
const StoreClass: StoreClassInterface = class Store () {
  constructor () {
    ...
  }

  static getInstance () {
    ...
  }
}

export default StoreClass
```