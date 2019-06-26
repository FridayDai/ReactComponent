const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DEMO_ENTRY = path.resolve(__dirname, 'demo.js');
const DIST = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    entry: DEMO_ENTRY,
    output: {
        path: DIST,
        filename: "[name]_[hash:8]_bundle.js",
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
                loaders: ['style-loader', 'css-loader?minimize',
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

    // resolve: {
    //     alias: {
    //         '@actions': path.resolve(__dirname, 'src', 'actions'),
    //         '@components': path.resolve(__dirname, 'src', 'components'),
    //         '@containers': path.resolve(__dirname, 'src', 'containers'),
    //         '@images': path.resolve(__dirname, 'src', 'images'),
    //         '@reducers': path.resolve(__dirname, 'src', 'reducers'),
    //         '@styles': path.resolve(__dirname, 'src', 'styles'),
    //         '@util': path.resolve(__dirname, 'src', 'util'),
    //     }
    // },

    devtool: "source-map",
    devServer: {
        host: '0.0.0.0', // 你希望服务器外部可访问，指定
        port: 45678,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true, // 不请求路径, 适合单页应用
        hot: true,
        inline: true,
        compress: true,
        proxy: {
            // '/api/v1/op/*': {
            //     // 'target': 'http://10.91.255.79:8001',
            //     'target': 'http://10.92.4.98:8021',
            //     'pathRewrite': { '^/api/v1/op': '/api/v1' },
            //     'secure': false
            // },
            // '/api/v1/*': {
            //     // 'target': 'http://10.91.255.79:8001',
            //     'target': 'http://10.92.4.98:8020',
            //     'secure': false
            // }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'reactcomponent',
            filename: 'index.html',
            template: path.resolve(__dirname, 'template.html')
        }),
        new CleanWebpackPlugin()
    ]
};
