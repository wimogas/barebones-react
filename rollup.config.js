import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postCSS from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup'

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: './lib/cjs/index.js',
            format: 'cjs',
        },
        {
            file: './lib/esm/index.js',
            format: 'esm',
        },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
            typescript: require('typescript'),
            exclude: ["**/stories/**", "**/stories/**.**" ]
        }),
        svgr(),
        postCSS({
            plugins: [require('autoprefixer')],
        }),

    ],
};