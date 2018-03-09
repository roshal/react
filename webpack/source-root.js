import {
	PrefetchPlugin as package__webpack__prefetch_plugin,
} from 'webpack'
import {
	join as package__path__join,
} from 'path'
//
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
								//	useRelativePath: true,
							},
						},
					],
				},
			],
		},
		plugins: [
			new package__webpack__prefetch_plugin(package__path__join(__dirname, '..', 'source'), './root/favicon.png'),
		],
	}
}
