const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// HtmlWebpackPlugin() - закомментирован

module.exports = merge(common, {
	mode: "development",
	devtool: 'source-map',//'cheap-module-source-map',

	devServer: {
		static: {
			directory: path.join(__dirname, './dist'),
		},
		compress: true,
		historyApiFallback: true,
		// open: true,
		// host: "localhost",
		port: 8080,
	},
	plugins: [
		// new webpack.LoaderOptionsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin({
			files: path.resolve(__dirname, "./src/js"),
		}),
		// new HtmlWebpackPlugin({
		// 	template: "./src/index.html",
		// 	filename: "./index.html",
		// 	minify: {
		// 		collapseWhitespace: false,
		// 	}
		// }),
	],
});
