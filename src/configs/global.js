

module.exports ={

    // Source directory path
    SRC: "./src",

    // Destination or build directory path
    DIST: "./dist",

    // Checkout for production
    PRODUCTION_MODE: (process.env.NODE_ENV === 'production'),

    // Define server port
    PORT: 3000

};