const OPTIONS = require('./src/configs/global'),
    webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

let htmlOptions = require( OPTIONS.SRC + '/configs/webpack/htmlOptions'),
    cleanOptions = require( OPTIONS.SRC + '/configs/webpack/cleanOptions'),
    uglifyOptions = require( OPTIONS.SRC + '/configs/webpack/uglifyOptions'),
    serverOptions = require( OPTIONS.SRC + '/configs/webpack/serverOptions'),
    styleOptions = require( OPTIONS.SRC + '/configs/webpack/styleOptions'),
    commionChunkOptions = require( OPTIONS.SRC + '/configs/webpack/commionChunkOptions');

module.exports = {

    entry: {
        app: [
            OPTIONS.SRC + '/js/index.js',
            OPTIONS.SRC + '/scss/main.scss',
        ]
        //TODO: add bootstrap https://github.com/shakacode/bootstrap-loader
        //TODO: add fontawesome https://github.com/gowravshekar/font-awesome-webpack
    },

    output:{
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, OPTIONS.DIST)
    },

    module:{
        rules:[
            // TODO: add jsx loader and babel
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(styleOptions.module) //["style-loader", "css-loader", "sass-loader"]
            }
            // TODO: add image loader
            // TODO: add fonts loader
        ]
    },

    plugins: [
        // Responsible for cleaning dist folder
        new CleanWebpackPlugin(OPTIONS.DIST, cleanOptions),

        // Responsible for compiling index.html
        new HtmlWebpackPlugin(htmlOptions),

        // Responsible for extracting styles into file
        new ExtractTextPlugin(styleOptions.plugin),

        // Responsible for collection all double scripts into one file
        new webpack.optimize.CommonsChunkPlugin(commionChunkOptions)
    ]

};


if (OPTIONS.PRODUCTION_MODE) {

    module.exports.plugins.push(
        // Responsible for uglify outputs
        new webpack.optimize.UglifyJsPlugin(uglifyOptions)
    );

} else {

    module.exports.devtool = 'inline-source-map';

    module.exports.devServer = serverOptions;

}