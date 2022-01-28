
var config = {
    module: {
        loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }]
    }
};

module.exports = config;