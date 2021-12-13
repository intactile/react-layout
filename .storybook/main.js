const path = require('path');
const babelConfig = require('../babel.config.js');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/*.stories.mdx', '../src/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  babel: async (options) => {
    options.overrides.push({
      ...babelConfig,
      test: '*',
    });
    return options;
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
