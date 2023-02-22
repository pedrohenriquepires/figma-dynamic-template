const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const CopyPlugin = require('copy-webpack-plugin')
const alias = require('./alias')
const paths = require('./paths')

module.exports = (_, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',

  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: `${paths.appSrc}/app/index.tsx`,
    code: `${paths.appSrc}/plugin/index.ts`,
  },

  module: {
    rules: [
      { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      ...alias,
    },
  },

  output: {
    filename: '[name].js',
    path: paths.appDist,
  },

  plugins: [
    new HtmlWebpackPlugin({
      templateContent: '<div id="react-page"></div>',
      filename: 'ui.html',
      chunks: ['ui'],
      cache: false,
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
    new CopyPlugin({
      patterns: [{ from: 'manifest.json' }],
    }),
  ],
})
