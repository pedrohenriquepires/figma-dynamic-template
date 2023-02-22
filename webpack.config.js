const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (_, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',

  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/app/index.tsx',
    code: './src/plugin/index.ts',
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
              ["@babel/preset-react", {
                "runtime": "automatic"
              }]
            ]
          }
        }
      },
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
      filename: 'ui.html',
      chunks: ['ui'],
      cache: false,
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
    new CopyPlugin({
      patterns: [
        { from: 'manifest.json' },
      ],
    }),
  ],
});
