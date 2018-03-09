import {
	PrefetchPlugin as package__webpack__prefetch_plugin,
} from 'webpack'
import {
	join as package__path__join,
} from 'path'
//
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
		plugins: [
			new package__webpack__prefetch_plugin(package__path__join(__dirname, '..', 'source'), './templates/index.pug'),
		],
	}
}
