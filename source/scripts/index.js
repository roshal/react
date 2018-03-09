import {
	connect as package__react_redux__connect,
} from 'react-redux'
import {
	bindActionCreators as package__redux__bind_action_creators,
} from 'redux'
//
import * as module__actions__ from '../../actions'
//
const map_state_to_props = (state) => {
	return state
}
const map_dispatch_to_props = (dispatch) => {
	return {
		tableActions: package__redux__bind_action_creators(module__actions__, dispatch)
	}
}
export default package__react_redux__connect(map_state_to_props, map_dispatch_to_props)(app)
