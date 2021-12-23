module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        ],
      ],
    },
  },
  presets: [
    ['@babel/preset-env', { modules: false }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
  ],
  plugins: ['@emotion/babel-plugin'],
};
