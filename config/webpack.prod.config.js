const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const prodConfiguration = env => {
  return merge([
    {
      optimization: {
        minimizer: [new UglifyJsPlugin()]
      },
      plugins: [new MiniCssExtractPlugin(), new OptimizeCssAssetsPlugin()]
    }
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
};
