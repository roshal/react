import webpack_merge from 'webpack-merge'
//
import {
	join as path__join,
} from 'path'
//
export default (env) => {
	const configuration = (name) => {
		const path = './webpack/' + name
		return require(path).default(env)
	}
	return webpack_merge(
		{
			context: path__join(__dirname, 'source'),
			entry: {
				common: [
					'./common',
					'./favicon.png',
					'./index.pug',
					'./styles/common.sass',
				],
			},
			output: {
				chunkFilename: 'scripts/[name].js',
				filename: '[name].js',
				publicPath: '',
			},
			devServer: {
				historyApiFallback: true,
			},
			resolveLoader: {
				moduleExtensions: [
					'-loader',
				],
			},
		},
		configuration('images'),
		configuration('scripts'),
		configuration('styles'),
		configuration('templates'),
		env.develop ? configuration('develop') : {},
		env.produce ? configuration('produce') : {},
	)
}
