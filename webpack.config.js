var path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'toggler.js',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
            }
        ]
    },
    resolve: {extensions: ['.js', '.jsx', '.ts', '.tsx', '.less']},
    externals: {
        'react': 'commonjs react'
    }
};
