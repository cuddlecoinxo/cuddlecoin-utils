'use strict';

module.exports = {
    mode: 'production',
    entry: './dist/index.js',
    output: {
        filename: 'CuddleCoinUtils.js',
        library: 'CuddleCoinUtils',
        libraryTarget: 'umd'
    },
    node: {
        fs: 'empty'
    },
    target: 'web'
};
