module.exports = {
    lang: 'en-US',

    title: 'Webpack Boilerplate',

    inject: false,

    appMountId: 'app',

    template: require('html-webpack-template'),

    meta: [
        {
            name: 'description',
            content: 'Webpack-boilerplate'
        },
        {
            name: 'keywords',
            content: 'Webpack, Boilerplate'
        }
    ],

    mobile: true,

    links: [
        {
            href:'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
            rel: 'stylesheet',
            integrity: "sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ",
            crossorigin: "anonymous"
        }

    ],

    scripts:[
        {
            src: "https://code.jquery.com/jquery-3.1.1.slim.min.js",
            integrity: "sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n",
            crossorigin: "anonymous"
        },
        {
            src: "https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js",
            integrity:"sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb",
            crossorigin:"anonymous"
        },
        {
            src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js",
            integrity:"sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn",
            crossorigin: "anonymous"
        }
    ],

    minify: {
        collapseWhitespace: true
    }
};