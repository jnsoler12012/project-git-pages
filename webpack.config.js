const path = require('path');

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        clean: true,
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /\//, to: '/404.html' }],
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },

                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    }
}