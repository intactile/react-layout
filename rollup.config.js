import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// eslint-disable-next-line import/extensions
const packageJson = require('./package.json');

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', 'prop-types', /@babel\/runtime/],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    resolve({ browser: true }),
    commonjs(),
  ],
};
