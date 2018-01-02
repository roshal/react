export default (env) => {
	return {
		module: {
			rules: [
				{
					resource: {
						exclude: [
							/(?:\/|\\)node_modules(?:\/|\\)/,
						],
						include: [
							/\.js$/,
						],
					},
					use: [
						{
							loader: 'babel',
							options: {
								plugins: env.produce ? [
									'lodash',
								] : [],
								presets: [
									'env',
									'flow',
									'stage-2',
								],
							},
						},
						// {
						// 	loader: 'eslint',
						// 	options: {
						// 		configFile: '.eslintrc.yml',
						// 		ignore: false,
						// 		useEslintrc: false,
						// 	},
						// },
					],
				},
			],
		},
	}
}
