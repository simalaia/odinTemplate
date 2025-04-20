const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
	watchFiles: ["./src/template.html"],
    },
}
