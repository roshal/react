//
import p__copy_webpack_plugin from 'copy-webpack-plugin'
//
import {
	PrefetchPlugin as p__webpack__prefetch_plugin,
} from 'webpack'
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path__join(__dirname, '..', 'source', 'assets'),
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]?[hash:base16:16]',
								useRelativePath: true,
							},
						},
					],
				},
			],
		},
		plugins: [
			new p__copy_webpack_plugin([
				{
					from: p__path__join(__dirname, '..', 'source/assets/favicon.png'),
				},
			], {}),
			//	new p__webpack__prefetch_plugin(p__path__join(__dirname, '..', 'source'), './assets/favicon.png'),
		],
	}
}
