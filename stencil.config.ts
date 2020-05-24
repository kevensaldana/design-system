import { Config } from '@stencil/core';
import {postcss} from "@stencil/postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import nested from 'postcss-nested';
import nestedAncestors from 'postcss-nested-ancestors';

// const purge = purgecss({
//   content: ['./src/**/*.tsx', './src/index.html'],
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// });

const pluginsPostCss = [
  autoprefixer(),
  tailwindcss('./tailwind.config.js'),
  cssnano,
  nested,
  nestedAncestors,
];

export const config: Config = {
  namespace: 'design-system',
  bundles: [
    { components: ['k-button'] },
  ],
  srcDir: 'src',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'assets',
          dest: '../assets'
        },
        {
          src: '../tailwind.config.js'
        }
      ]
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: './src/global/styles.css',
  preamble: '©2020 Keven Components | Todos los derechos reservados',
  plugins: [
    postcss({
      plugins: pluginsPostCss
    })
  ]
};
