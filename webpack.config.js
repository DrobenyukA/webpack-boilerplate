const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginOptions  = require('./src/configs/html-webpack-plugin.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/index.js',
        hello: './src/js/hello.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin(HtmlWebpackPluginOptions)
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/public')
    },
};
