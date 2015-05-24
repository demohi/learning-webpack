/**
 * learning-webpack - webpack.config.js
 * Created by mengdesen
 */

'use strict';

module.exports = {
    entry: "./app",
    output: {
        path: __dirname + "/build",
        filename: "app.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx'},
            { test: /\.css$/, loader: "style!css?localIdentName=[name]__[local]___[hash:base64:5]!postcss" },
            {test: /\.scss$/, loader: "style!css?localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass"}
        ]
    },
    postcss: [ require('postcss-local-scope') ]
};