//
import {
	PrefetchPlugin as p__webpack__prefetch_plugin,
} from 'webpack'
import {
	join as p__path__join,
} from 'path'
//
export default (env) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path__join(__dirname, '..', 'source', 'templates'),
						],
						test: [
							/\.pug$/,
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].html',
							},
						},
						{
							loader: 'pug-html-loader',
							options: {
								// deprecated
								pretty: env.develop ? '\t' : false,
							},
						},
					],
				},
			],
		},
		plugins: [
			new p__webpack__prefetch_plugin(p__path__join(__dirname, '..', 'source'), './templates/index.pug'),
		],
	}
}
