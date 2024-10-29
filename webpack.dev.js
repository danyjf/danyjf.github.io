const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        watchFiles: ['src/*.html'],
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
});
