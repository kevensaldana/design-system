import { Config } from '@stencil/core';
import {postcss} from "@stencil/postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// const purge = purgecss({
//   content: ['./src/**/*.tsx', './src/index.html'],
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// });

const pluginsPostCss = [
  autoprefixer(),
  tailwindcss('./tailwind.config.js'),
  cssnano
];

export const config: Config = {
  namespace: 'design-system',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
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
  plugins: [
    postcss({
      plugins: pluginsPostCss
    })
  ]
};
