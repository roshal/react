//
import p__webpack_bundle_analyzer from 'webpack-bundle-analyzer'
//
export default () => {
	return {
		plugins: [
			new p__webpack_bundle_analyzer.BundleAnalyzerPlugin({
				//	openAnalyzer: false,
			}),
		],
	}
}
