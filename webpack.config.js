const path = require("path");
const webpack = require("webpack");

module.exports = {
	output: {
		filename: "[name].js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: require.resolve("babel-loader"),
					query: {
						presets: [
							["@babel/preset-env", { modules: false }]
						]
					}
				}
			}
		]
	},

	resolve: {
		alias: {
			"%blocks%": path.resolve(__dirname, "src/blocks")
		}
	},

	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
	]
};
