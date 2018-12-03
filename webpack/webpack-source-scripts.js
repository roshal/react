//
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
						exclude: [
							p__path__join(__dirname, '..', 'node_modules'),
						],
						include: [
							p__path__join(__dirname, '..', 'source', 'scripts'),
						],
						test: [
							/\.js$/,
						],
					},
					use: [
						{
							loader: 'babel-loader',
							options: {
								babelrc: false,
								plugins: [
									'@babel/plugin-proposal-class-properties',
									...env.produce ? [
										'lodash',
									] : [],
								],
								presets: [
									'@babel/preset-env',
									'@babel/preset-flow',
								],
							},
						},
						//	{
						//		loader: 'eslint',
						//		options: {
						//			configFile: '.eslintrc.yml',
						//			ignore: false,
						//			useEslintrc: false,
						//		},
						//	},
					],
				},
			],
		},
	}
}
