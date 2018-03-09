import package__react_hyperscript from 'react-hyperscript'
import {
	Component as package__react__component,
} from 'react'
import {
	Link as package__react_router_dom__link,
} from 'react-router-dom'
//
const $ = package__react_hyperscript
export default class extends package__react__component {
	render = () => {
		return [
			$('ul.list', [
				$('li', [
					$(package__react_router_dom__link, {
						to: '/',
					}, [
						'page',
					]),
				]),
			]),
		][0]
	}
}
