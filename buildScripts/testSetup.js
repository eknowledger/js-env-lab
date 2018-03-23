// not transpiled file it will use  commonjs

// register babel to transpile before our code
require('babel-register')();

// Disable webpack features that Mochar doesn't understand
require.extensions['.css'] = function(){};


