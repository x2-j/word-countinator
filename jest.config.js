const { compilerOptions } = require('./tsconfig.json')
const moduleMapper = () => {
  const mapped = {}
  Object.entries(compilerOptions.paths).forEach(([key, value]) => {
    const lookup = key.replace('/*', '/(.*)$')
    // "@interface/*": ["interfaces/*"],
    // @interface/(.*)$: "/src/interfaces/$1"
    mapped[lookup] = value[0].replace('/*', '/$1')
  })
  return mapped
}

module.exports = {
  preset: 'ts-jest',
  // this enables us to use tsconfig-paths with jest
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: moduleMapper(),
}
