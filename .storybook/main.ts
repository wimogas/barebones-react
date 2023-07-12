const path = require("path");

import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../src/Intro.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      module.exports = {
        module: {
          rules: [
            {
              test: /\.scss$/,
              use: [
                {
                  loader: "style-loader"
                },
                {
                  loader: "css-loader"
                },
                {
                  loader: "sass-loader",
                  options: {
                    javascriptEnabled: true
                  }
                }
              ],
              include: path.resolve(__dirname, "../")
            },
            {
              test: /\.png$/,
              use: [
                {
                  loader: "file-loader"
                },
              ],
            }
          ]
        }
      };
    }
    if (configType === 'PRODUCTION') {
      // Modify config for production
    }
    return config;
  },
};
export default config;
