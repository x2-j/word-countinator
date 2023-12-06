const { compilerOptions } = require('./tsconfig.json')
const moduleMapper = () => {
  const mapped = {}
  Object.entries(compilerOptions.paths).forEach(([key, value]) => {
    mapped[key.replace('/*', '/(.*)$')] = value[0].replace('/*', '/$1')
  })
  return mapped
}

module.exports = {
  preset: 'ts-jest',
  // this enables us to use tsconfig-paths with jest
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: moduleMapper(),
}
