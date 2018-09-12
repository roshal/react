import package__extract_text_webpack_plugin from 'extract-text-webpack-plugin'
import {
	join as package__path__join,
} from 'path'
import {
	PrefetchPlugin as package__webpack__prefetch_plugin,
} from 'webpack'
//
export default (env) => {
	const plugin = new package__extract_text_webpack_plugin({
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
							/\.sass$/,
						],
					},
					use: plugin.extract({
						fallback: [
							{
								loader: 'style',
								options: {
									convertToAbsoluteUrls: env.produce,
									sourceMap: env.develop,
								},
							},
						],
						use: [
							{
								loader: 'css',
								options: {
									minimize: env.produce ? {
										discardComments: {
											removeAll: true,
										},
									} : false,
									// sourceMap: env.develop,
								},
							},
							{
								loader: 'sass',
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
			new package__webpack__prefetch_plugin(package__path__join(__dirname, '..', 'source'), './styles/common.sass'),
			plugin,
		],
	}
}
