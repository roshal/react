//
import p__react_hyperscript from '~/react-hyperscript'
//
import {
	Component as p__react__component,
} from '~/react'
import {
	connect as p__react_redux__connect,
} from '~/react-redux'
import {
	bindActionCreators as p__redux__bind_action_creators,
} from '~/redux'
//
import * as m__actions__ from '/redux/actions'
//
const $ = p__react_hyperscript
const source = class extends p__react__component {
	state = {
		id: '',
		newItemKey: '',
		newItemValue: '',
	}
	handle_change = (event) => {
		console.log(event.target.id)
		this.setState({
			...this.state,
			[event.target.id]: event.target.value,
		})
	}
	handle_submit = (event) => {
		const get_id = () => {
			return Math.random().toString(36).substr(2, 9)
		}
		if (this.state.newItemKey && this.state.newItemValue) {
			console.log('done')
			const item = {
				id: get_id(),
				key: this.state.newItemKey,
				value: this.state.newItemValue,
			}
			this.props.tableActions.create_item(item)
			this.setState({
				newItemKey: '',
				newItemValue: '',
			})
		} else {
			alert('fill in the \'KEY\' and \'VALUE\' fields')
		}
	}
	handle_remove = (item) => {
		this.props.tableActions.remove_item(item)
	}
	handle_update = (item) => {
		console.log(item.value)
		this.setState({
			id: item.id,
			newItemKey: item.key,
			newItemValue: item.value,
		})
		const update = {
			id: item.id,
			key: this.state.newItemKey,
			value: this.state.newItemValue,
		}
		this.props.tableActions.remove_item(update)
	}
	items = (items) => {
		return items.map(
			(item) => {
				return (
					$('div.list__item', {
						key: item.id,
						name: 'name',
					}, [
						$('div.list__key', [
							item.key,
						]),
						$('div.list__value', [
							item.value,
						]),
						$('input.list__remove-btn.btn', {
							type: 'button',
							value: 'Remove',
							onClick: () => {
								return this.handle_remove(item)
							},
						}),
						$('input.list__edit-btn.btn', {
							type: 'button',
							value: 'Edit',
							onClick: () => {
								return this.handle_update(item)
							},
						}),
					])
				)
			},
		)
	}
	render = () => {
		return [
			$('div.app', [
				$('div.app__list.list', [
					this.items(this.props.m__reducers__list.items),
				]),
				$('form', [
					$('label.app__key-label', [
						'KEY:',
						$('input.app__key-input', {
							id: 'newItemKey',
							type: 'text',
							value: this.state.newItemKey,
							onChange: this.handle_change,
						}),
					]),
					$('label.app__value-label', [
						'VALUE:',
						$('input.app__value-input', {
							id: 'newItemValue',
							type: 'text',
							value: this.state.newItemValue,
							onChange: this.handle_change,
						}),
					]),
					$('input.app__submit-btn.btn', {
						type: 'button',
						value: 'Submit',
						onClick: this.handle_submit,
					}),
				]),
			]),
		][0]
	}
}
const map_to_props_state = (state) => {
	return state
}
const map_to_props_dispatch = (dispatch) => {
	return {
		tableActions: p__redux__bind_action_creators(m__actions__, dispatch)
	}
}
const connection = p__react_redux__connect(
	map_to_props_state,
	map_to_props_dispatch,
)
//
export default connection(source)
