var webpack = require('webpack');
var path = require('path');

module.exports = {
    output: {
        publicPath: 'js/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
        }]
    }
};