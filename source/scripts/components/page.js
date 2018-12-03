//
import p__lodash_fp from '~/lodash/fp'
import p__react_hyperscript from '~/react-hyperscript'
//
import {
	Component as p__react__component,
} from '~/react'
import {
	Link as p__react_router_dom__link,
} from '~/react-router-dom'
//
import m__list from '/components/list'
//
const $ = p__react_hyperscript
//
export default class extends p__react__component {
	state = {
		sequence: [
			'hello',
		],
	}
	constructor(match) {
		super()
		this.state.match = match
		this.state.sequence.push('react')
	}
	render = () => {
		return [
			$('ul.list', [
				$('li', [
					$(p__react_router_dom__link, {
						to: '/component',
					}, [
						'page-component',
					]),
				]),
				$('li', [
					p__lodash_fp.join(' ')(this.state.sequence),
				]),
				$('li', [
					$('div.container', [
						$(m__list),
					]),
				]),
			]),
		][0]
	}
}
