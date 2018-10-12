var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/client/main',
        vendor: [
            'flux',
            'history',
            'keymirror',
            'object-assign',
            'react',
            'react-addons-css-transition-group',
            'react-addons-linked-state-mixin',
            'react-bootstrap',
            'react-dom',
            'react-router',
            'react-router-bootstrap'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        filename: 'js/[name].bundle.[hash].js',
        publicPath: './'
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src')},
            {test: /\.css$/, loader: ExtractTextWebpackPlugin.extract("style-loader", "css-loader")},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Welcome to Reaction Tracker",
            template: "src/index.html",
            filename: "../../src/server/server.html",
            inject: "body"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('js/common.bundle.[hash].js'),
        new ExtractTextWebpackPlugin("css/[name].[hash].css"),
        new CopyWebpackPlugin([{from:"./src/assets/favicon.ico", to:"favicon.ico"}])
    ]
};
