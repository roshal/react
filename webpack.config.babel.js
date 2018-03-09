import package__webpack_merge from 'webpack-merge'
//
export default (env) => {
	const configuration = (name) => {
		const path = './webpack/' + name
		return require(path).default(env)
	}
	return package__webpack_merge(
		configuration('common'),
		configuration('source-root'),
		configuration('source-scripts'),
		configuration('source-styles'),
		configuration('source-templates'),
		env.develop ? configuration('mode-develop') : {},
		env.produce ? configuration('mode-produce') : {},
	)
}
