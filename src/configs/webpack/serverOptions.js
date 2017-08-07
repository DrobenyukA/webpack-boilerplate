/**
 * See all documentation on https://webpack.js.org/configuration/dev-server/
 *
 * @type {{compress: boolean, contentBase: (string|*), open: boolean, port: number}}
 */
const OPTIONS = require('./../global'),
    path = require('path');

module.exports ={

    // If true enables gzip compression
    compress: false,

    // Tell the server where to serve content from
    contentBase: path.join(__dirname, OPTIONS.DIST),

    // Will open the browser
    open: true,

    // Open from root page
    openPage: '',

    // Specify a port number to listen for requests
    port: OPTIONS.PORT

};