'use strict';
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      {CleanWebpackPlugin} = require('clean-webpack-plugin'),
      ManifestPlugin = require('webpack-manifest-plugin'),
      BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/mb-add-on-index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/',
        filename: '[name].js',
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src/js/'),
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.s[ac]ss$/i,
                include: path.resolve(__dirname, 'src/scss'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: [
                    path.resolve(__dirname, 'src/fonts')
                ],
                loader: 'file-loader'
            },
            {
              test: /\.(ico|png|svg|jpg|gif)$/i,
              include: path.resolve(__dirname, 'src/img'),
              options: {  
                publicPath: 'dist/'
              },
              loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BrowserSyncPlugin(
            {
              proxy: 'http://sequele.com/mb-add-on.php',
              notify: false,
              files: [
                {
                  match: ['./mb-add-on.php', './src/'],
                  fn(event, file) {
                    if (event === 'change') {
                      const bs = require('browser-sync').get('bs-webpack-plugin');
                      bs.reload('mb-add-on.php');
                    }
                  },
                },
              ],
            },
            {
              reload: false,
            }
          ),
    ],
};
