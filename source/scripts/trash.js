//
import {
	connect,
} from '~/react-redux'
import {
	bindActionCreators,
} from '~/redux'
//
import * as m__actions__ from '/redux/actions/index'
//
const map_state_to_props = (state) => {
	return state
}
const map_dispatch_to_props = (dispatch) => {
	return {
		tableActions: bindActionCreators(m__actions__, dispatch)
	}
}
//
export default connect(map_state_to_props, map_dispatch_to_props)(app)
