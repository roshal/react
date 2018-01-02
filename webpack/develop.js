import {
	join as path__join,
} from 'path'
//
export default () => {
	return {
		devServer: {
			port: 80,
		},
		devtool: 'cheap-module-source-map',
		output: {
			path: path__join(__dirname, '../output'),
		},
	}
}
