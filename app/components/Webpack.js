/**
 * learning-webpack - Webpack.js
 * Created by mengdesen on 15/5/24.
 */

'use strict';

var React = require('react');

var css = require('./webpack.css');
var scss = require('./webpack.scss');

console.log(scss);
console.log(css);

var Webpack = React.createClass({
    render: function () {
        return (
            <div>
                Learing Webpack
                <span className={css.red}>red</span>
                <span className={css.green}>green</span>
            </div>
        )
    }
});

module.exports = Webpack;

