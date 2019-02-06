var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,

    entry: './static/js/index',

    output: {
        path: path.resolve('./static/__build__/'),
        filename: "[name].js",
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-class-properties'],
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            },
        ],
    },

    resolve: {
        modules: ['node_modules',],
        extensions: ['.js', '.jsx'],
    },
}