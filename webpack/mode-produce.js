import package__uglifyjs_webpack_plugin from 'uglifyjs-webpack-plugin'
//
import {
	join as package__path__join,
} from 'path'
//
import {
	EnvironmentPlugin as package__webpack__environment_plugin,
	optimize as package__webpack__optimize,
} from 'webpack'
//
export default () => {
	return {
		devServer: {
			compress: true,
			https: true,
			port: 443,
		},
		output: {
			path: package__path__join(__dirname, '..', 'public'),
		},
	}
}
