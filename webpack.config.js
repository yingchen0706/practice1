var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/');
var JS_DIR = path.resolve(__dirname, 'src/js');
var CSS_DIR = path.resolve(__dirname, 'src/style');

var config = {
    entry: JS_DIR + '/entry.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.jsx$/,
                include: JS_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: CSS_DIR,
                loader: "style-loader!css-loader"
            }
        ]
    }
};

module.exports = config;
