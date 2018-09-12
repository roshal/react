import {
	connect as p__react_redux__connect,
} from 'react-redux'
import {
	bindActionCreators as p__redux__bind_action_creators,
} from 'redux'
//
import * as m__actions__ from '../../actions'
//
const map_state_to_props = (state) => {
	return state
}
const map_dispatch_to_props = (dispatch) => {
	return {
		tableActions: p__redux__bind_action_creators(m__actions__, dispatch)
	}
}
export default p__react_redux__connect(map_state_to_props, map_dispatch_to_props)(app)
