//
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		mode: 'development',
		devServer: {
			port: 80,
		},
		devtool: 'cheap-module-source-map',
		output: {
			path: p__path__join(__dirname, '..', 'output'),
		},
	}
}
