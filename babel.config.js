module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@Decorators':'./src/Decorators',
        '@Interfaces':'./src/interfaces'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
