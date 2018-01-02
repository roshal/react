import extract_text_webpack_plugin from 'extract-text-webpack-plugin'
//
export default (env) => {
	const plugin = new extract_text_webpack_plugin({
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
									sourceMap: env.develop,
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
			plugin,
		],
	}
}
