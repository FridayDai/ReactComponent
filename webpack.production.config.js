const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ENTRY = path.resolve(__dirname, 'production.js');
const DIST = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'production',
    entry: ENTRY,
    output: {
        path: DIST,
        filename: "main.js",
        chunkFilename: "[name]_[chunkhash:8]_chunk_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: ['/node_modules/', DIST],
                loaders: ['babel-loader']
            },
            {
                test: /\.(less|scss|css)$/,
                exclude: ['/node_modules/', DIST],
                loaders: ['style-loader', 'css-loader',
                    {
                        'loader': 'postcss-loader',
                        'options': { // 如果没有options这个选项将会报错 No PostCSS Config found
                            'plugins': loader => [
                                require('autoprefixer')() // CSS浏览器兼容
                            ]
                        }
                    },
                    {
                        'loader': 'less-loader',
                        'options': {
                            'javascriptEnabled': true
                        }
                    }
                ]
            },
            {
                exclude: ['/node_modules/', DIST],
                test: /\.(png|jpg|gif|svg)$/,
                use: ['url-loader?limit=10000&name=[name]_[hash:8].[ext]']
            }
        ]
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },

    devtool: "source-map",

    plugins: [
        new CleanWebpackPlugin()
    ]
};
