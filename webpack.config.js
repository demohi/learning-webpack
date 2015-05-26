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
            { test: /\.css$/, loader: "style!css?module" },
            {test: /\.scss$/, loader: "style!css?module!sass"}
        ]
    }
};