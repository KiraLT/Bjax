const path = require('path');
const fs = require('fs');
const process = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: process.env.BUILD_DEMO ? 'development' : 'production',

	entry: process.env.BUILD_DEMO ? './src/entries/demo.ts' : {
		full: './src/entries/full.ts'
	},

	output: {
		filename: 'bjax.[name].js',
		path: path.resolve(__dirname, process.env.BUILD_DEMO ? 'demo' : 'dist')
	},

	plugins: process.env.BUILD_DEMO ? fs.readdirSync(path.resolve(__dirname, 'public')).filter(v => fs.lstatSync(path.resolve(__dirname, 'public', v)).isFile()).map(v => new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'public', v),
		filename: v.replace(/\.[^/.]+$/, '') !== 'index' ? `./${v.replace(/\.[^/.]+$/, '')}/index.html` : 'index.html'
	})): [],

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

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.hbs', '.css', '.scss']
	}
};
