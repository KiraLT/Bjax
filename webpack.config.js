const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',

	entry: {
		demo: './src/entries/demo.ts',
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: fs.readdirSync(path.resolve(__dirname, 'public')).filter(v => fs.lstatSync(path.resolve(__dirname, 'public', v)).isFile()).map(v => new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', v),
				filename: v.replace(/\.[^/.]+$/, '') !== 'index' ? `./${v.replace(/\.[^/.]+$/, '')}/index.html` : 'index.html'
			})
	),

	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: [/node_modules/]
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			},
			{
				test: /\.(css|scss)$/,
				use: [
				  'style-loader',
				  'css-loader',
				  'sass-loader',
				],
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.hbs', '.css', '.scss']
	}
};
