import type { StorybookConfig } from "@storybook/react-webpack5";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel",
    '@storybook/addon-a11y'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: (config) => {
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: resolve(__dirname, "../")
      });

      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
      });
    }
    if (config.resolve && config.resolve.extensions) {
      config.resolve.extensions.push(".ts", ".tsx");
    }

    return config;
  }
};
export default config;
