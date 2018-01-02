import react_hyperscript from 'react-hyperscript'
import lodash_fp from 'lodash/fp'
//
import {
	Component as react__component,
} from 'react'
//
import {
	Link as react_router_dom__link,
} from 'react-router-dom'
//
export default class extends react__component {
	state = {
		sequence: [
			'hello',
		],
	}
	constructor() {
		super()
		this.state.sequence.push('react')
	}
	render = () => {
		return [
			react_hyperscript('ul.list', [
				react_hyperscript('li', [
					react_hyperscript(react_router_dom__link, {
						to: './component',
					}, [
						'page-component',
					]),
				]),
				react_hyperscript('li', [
					lodash_fp.join(' ')(this.state.sequence),
				]),
			]),
		][0]
	}
}
