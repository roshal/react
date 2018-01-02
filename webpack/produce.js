import uglifyjs_webpack_plugin from 'uglifyjs-webpack-plugin'
//
import {
	DefinePlugin as webpack__define_plugin,
	optimize as webpack__optimize,
} from 'webpack'
//
import {
	join as path__join,
} from 'path'
//
export default () => {
	return {
		devServer: {
			compress: true,
			https: true,
			port: 443,
		},
		output: {
			path: path__join(__dirname, '../public'),
		},
		plugins: [
			new uglifyjs_webpack_plugin({
				cache: true,
				parallel: true,
			}),
			new webpack__define_plugin({
				'process.env.NODE_ENV': JSON.stringify('production'),
			}),
			new webpack__optimize.CommonsChunkPlugin({
				children: true,
				filename: '[name].js',
				minChunks: Infinity,
				name: 'vendor',
			}),
			new webpack__optimize.ModuleConcatenationPlugin(),
		],
	}
}
