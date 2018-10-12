var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './src/server/main',
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'backend.js'
    },
    module: {
        loaders: [
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
            {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src')},
            {test: /\.html/, loaders: ['html'], include: path.join(__dirname, 'src/server')}
        ]
    },
    externals: nodeModules,
    plugins: [

        new webpack.IgnorePlugin(/\.(less|woff|png|woff2|eot|ttf)$/),
        new webpack.NormalModuleReplacementPlugin(/\.css$/, 'node-noop')
    ]
}