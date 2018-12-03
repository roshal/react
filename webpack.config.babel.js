//
import p__webpack_merge from 'webpack-merge'
//
export default (env) => {
	const webpack = (name) => {
		const path = './webpack/webpack-' + name
		return require(path).default(env)
	}
	return p__webpack_merge(
		webpack('common'),
		...env.analyze ? [webpack('mode-analyze')] : [],
		...env.develop ? [webpack('mode-develop')] : [],
		...env.produce ? [webpack('mode-produce')] : [],
		webpack('source-assets'),
		webpack('source-images'),
		webpack('source-scripts'),
		webpack('source-styles'),
		webpack('source-templates'),
	)
}
