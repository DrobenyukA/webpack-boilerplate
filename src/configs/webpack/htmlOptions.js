/**
 * See all documentation on https://github.com/jantimon/html-webpack-plugin#configuration
 *
 * @type {{title: string, template: string, hash: boolean, minify: *}}
 */
const OPTIONS = require('./../global');

module.exports = {

    // The title to use for the generated HTML document
    title: "React-Redux boilerplate",

    // Path to template
    template: OPTIONS.SRC + "/html/index.ejs",

    // Append a unique webpack compilation hash to all included scripts and CSS files
    hash: true,

    // If true enable minify the output
    // List of all available options https://github.com/kangax/html-minifier#options-quick-reference
    minify: OPTIONS.PRODUCTION_MODE ? {

        collapseWhitespace: true,

        // Parse input according to HTML5 specifications
        html5: true,

        removeComments: true,

        removeEmptyAttributes: true,

    } : false
};