import {
	join as package__path__join,
} from 'path'
//
export default () => {
	return {
		devServer: {
			port: 80,
		},
		devtool: 'cheap-module-source-map',
		output: {
			path: package__path__join(__dirname, '..', 'output'),
		},
	}
}
