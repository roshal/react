export default () => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							/\.jpg$/,
							/\.png$/,
							/\.svg$/,
						],
					},
					use: [
						{
							loader: 'file',
							options: {
								name: '[name].[ext]',
								useRelativePath: true,
							},
						},
					],
				},
			],
		},
	}
}
