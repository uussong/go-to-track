const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { merge } = require('webpack-merge')

module.exports = {
  stories: [
    '../src/styles/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}))
    return merge(config, {
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                ['react-app', { flow: false, typescript: true }],
                require.resolve('@emotion/babel-preset-css-prop'),
              ],
            },
          },
        ],
      },
    })
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
}
