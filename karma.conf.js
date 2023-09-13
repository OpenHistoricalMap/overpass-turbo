/* eslint-env node */
const webpackConfig = require("./webpack.config");

module.exports = function (config) {
  var tests = "tests/test.*.js";

  config.set({
    frameworks: ["mocha"],

    files: [
      {
        pattern: tests
      }
    ],

    browsers: ["PhantomJS"],

    preprocessors: {
      [tests]: ["webpack"]
    },
    browserNoActivityTimeout: 20000,
    webpack: webpackConfig
  });
};
