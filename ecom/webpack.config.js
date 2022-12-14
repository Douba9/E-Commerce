const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.bundle.js"
    },
    resolve: {
        fallback: {
          "crypto": require.resolve("crypto-browserify"),
        }
      }
      
};