/**
 * learning-webpack - index.js
 * Created by mengdesen on 15/5/24.
 */

'use strict';

var React = require('react');

var Webpack = require('./components/Webpack');

var Index = React.createClass({
   render: function(){
       return (
           <Webpack/>
       )
   }
});

React.render(<Index/>, document.body);