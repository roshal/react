//
import {
	join as p__path__join,
} from 'path'
// import {
// 	PrefetchPlugin as p__webpack__prefetch_plugin,
// } from 'webpack'
//
export default () => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path__join(__dirname, '..', 'source', 'images'),
						],
						test: [
							/\.jpg$/,
							/\.png$/,
							/\.svg$/,
						],
					},
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 1,
								name: '[name].[ext]?[hash:8]',
								useRelativePath: true,
							},
						},
					],
				},
			],
		},
		plugins: [
			//	new p__webpack__prefetch_plugin(p__path__join(__dirname, '..', 'source'), './images/logo-react.png'),
		],
	}
}
