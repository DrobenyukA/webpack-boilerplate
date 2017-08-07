const OPTIONS = require('./../global');
/**
 * See all documentation on https://github.com/webpack-contrib/extract-text-webpack-plugin
 *                          https://github.com/webpack-contrib/css-loader#options
 *
 * @type {{module: {fallback: string, use: [null,null]}, plugin: {filename: string, disable: boolean, allChunks: boolean}}}
 */
module.exports = {
    module: {
        fallback: "style-loader",
        use: [
            {   // Responsible for css loading
                loader: 'css-loader',
                options:{
                    minimize: OPTIONS.PRODUCTION_MODE
                }
            },
            {   // Responsible for sass compilation
                loader: 'sass-loader',
                options: {
                    sourceMap: !OPTIONS.PRODUCTION_MODE
                }
            }
        ]
    },
    plugin:{
        //Name of the result file
        filename: 'styles/styles.css',

        // Disables the plugin
        disable: false,

        //Extract from all additional chunks
        allChunks: true
    }
};