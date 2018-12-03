//
import p__extract_text_webpack_plugin from 'extract-text-webpack-plugin'
//
import {
	join as p__path__join,
} from 'path'
import {
	PrefetchPlugin as p__webpack__prefetch_plugin,
} from 'webpack'
//
export default (env) => {
	const plugin = new p__extract_text_webpack_plugin({
		allChunks: env.produce,
		filename: '[name].css',
		ignoreOrder: true,
	})
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path__join(__dirname, '..', 'source', 'styles'),
						],
						test: [
							/\.sass$/,
						],
					},
					use: plugin.extract({
						...env.develop ? {
							fallback: [
								{
									loader: 'style-loader',
									options: {
										convertToAbsoluteUrls: env.produce,
										sourceMap: env.develop,
									},
								},
							],
						} : {},
						use: [
							{
								loader: 'css-loader',
								options: {
									minimize: env.produce ? {
										discardComments: {
											removeAll: true,
										},
									} : false,
									//	sourceMap: env.develop,
								},
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: env.develop,
								},
							},
						],
					}),
				},
			],
		},
		plugins: [
			new p__webpack__prefetch_plugin(p__path__join(__dirname, '..', 'source'), './styles/common.sass'),
			plugin,
		],
	}
}
