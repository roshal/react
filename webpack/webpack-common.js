//
import p__webpack_stylish from 'webpack-stylish'
//
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		context: p__path__join(__dirname, '..', 'source'),
		entry: {
			'source': './scripts/source.js',
		},
		output: {
			chunkFilename: 'scripts/[name].js',
			filename: '[name].js',
			publicPath: '',
		},
		devServer: {
			historyApiFallback: true,
			//	proxy: {
			//		'/api/': {
			//			changeOrigin: true,
			//			pathRewrite: {
			//				'^/api/': '/test_api/',
			//			},
			//			target: 'http://avengers.view.indev-group.eu/',
			//		},
			//	},
		},
		resolve: {
			alias: {
				'': p__path__join(__dirname, '..', 'source', 'scripts'),
				'~': p__path__join(__dirname, '..', 'node_modules'),
			},
			extensions: [
				'.js',
			],
			modules: [
				p__path__join(__dirname, '..', 'node_modules'),
			],
		},
		plugins: [
			{
				apply: (compiler) => {
					console.log(compiler.options.context)
				},
			},
			new p__webpack_stylish(),
		],
	}
}
