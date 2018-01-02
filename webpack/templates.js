export default (env) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							/\.pug$/,
						],
					},
					use: [
						{
							loader: 'file',
							options: {
								name: '[name].html',
							},
						},
						{
							loader: 'pug-html',
							options: {
								pretty: env.develop ? '\t' : false, // deprecated
							},
						},
					],
				},
			],
		},
	}
}
