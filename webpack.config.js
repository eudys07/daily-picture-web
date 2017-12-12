let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let BUILD_DIR = path.resolve(__dirname, 'dist');
let APP_DIR = path.resolve(__dirname, 'src');

let config = {
    entry: ["babel-polyfill", APP_DIR + '/index.js'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module : {
        loaders : [
            {
                test : /\.js?/,
                loader : 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
            { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
            { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
            Hammer: "hammerjs/hammer",
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'API_URL': JSON.stringify('http://localhost:8000')
            }
        })
    ]
};

module.exports = config;