const webpack = require("webpack");
const Dotenv = require("dotenv");
require("dotenv").config();

module.exports = (env) => {
  return {
    plugins: [
      new Dotenv(),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader", // creates style nodes from JS strings
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
            },
            {
              loader: "sass-loader", // compiles Sass to CSS
            },
          ],
        },
      ],
    },
  };
};
