const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginOptions = require('./src/configs/html-webpack-plugin.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractTextPluginOptions = require('./src/configs/extract-text-plugin.js');

let production = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: {
        app: [
            './src/js/index.js',
            './src/scss/main.scss'
        ],
        test: './src/js/test.js'
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin(HtmlWebpackPluginOptions),
        new ExtractTextPlugin(ExtractTextPluginOptions),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: !production
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: !production
                            }
                        }
                    ]
                })
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
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, './dist/public')
    },
};

/**
 * Profuction options
 */

if (production) {

    module.exports.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    );

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );

} else {

    module.exports.devtool = 'inline-source-map';

    module.exports.devServer = {
        contentBase: path.join(__dirname, "/dist"),
        port: 3000
    };

}