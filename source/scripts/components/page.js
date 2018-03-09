import package__lodash_fp from 'lodash/fp'
import package__react_hyperscript from 'react-hyperscript'
import {
	Component as package__react__component,
} from 'react'
import {
	Link as package__react_router_dom__link,
} from 'react-router-dom'
//
import module__list from './list'
//
const $ = package__react_hyperscript
export default class extends package__react__component {
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
					$(package__react_router_dom__link, {
						to: '/component',
					}, [
						'page-component',
					]),
				]),
				$('li', [
					package__lodash_fp.join(' ')(this.state.sequence),
				]),
				$('li', [
					$('div.container', [
						$(module__list),
					]),
				]),
			]),
		][0]
	}
}
