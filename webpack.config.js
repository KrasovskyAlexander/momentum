


module.exports = {
    entry: ['@babel/polyfill','./script.js'],
    output : './js/',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env'],
              }
            }
          }
        ]
    }
  }