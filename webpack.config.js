var path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'toggler.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
        ]
    },
    resolve: {extensions: ['.js', '.jsx', '.ts', '.tsx', '.less']},
    externals: {
        'react': 'commonjs react'
    }
};
