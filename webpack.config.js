const webpack = require('webpack');

module.exports = {
    entry: {
        main: './front/main.js'
    },
    output: {
        path: __dirname + '/front/static',
        filename: '[name].js',
        //path: path.resolve(__front, 'dist/assets')'/front/components/bundle.js'
    },
    target: 'node',
    //watch: true

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}