var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var fontFileLoader = 'file?name=font/[name]-[hash].[ext]';
var imageFileLoader = 'file?name=image/[name].[ext]';

module.exports = {
    entry : './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'},
            {test: /\.css$/, loader: ExtractTextWebpackPlugin.extract('css!autoprefixer-loader')},
            {test: /\.less$/, loader: ExtractTextWebpackPlugin.extract('css!autoprefixer-loader!less')},
            {test: /\.html$/, loader: 'html', exclude: /index\.html$/},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: fontFileLoader},
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: fontFileLoader},
            {test: /\.(jpe?g|png|gif|svg)$/, loader: imageFileLoader}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextWebpackPlugin('app.[contenthash].css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })

    ]
};