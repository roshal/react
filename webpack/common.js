import {
	join as package__path__join,
} from 'path'
//
export default () => {
	return {
		context: package__path__join(__dirname, '..', 'source'),
		entry: {
			common: './scripts/common',
		},
		output: {
			chunkFilename: 'scripts/[name].js',
			filename: '[name].js',
			publicPath: '',
		},
		devServer: {
			historyApiFallback: true,
			proxy: {
				'/api/': {
					changeOrigin: true,
					pathRewrite: {
						'^/api/': '/test_api/',
					},
					target: 'http://avengers.view.indev-group.eu/',
				},
			},
		},
		resolveLoader: {
			moduleExtensions: [
				'-' + 'loader',
			],
		},
	}
}
