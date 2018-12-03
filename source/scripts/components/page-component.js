//
import p__react_hyperscript from '~/react-hyperscript'
//
import {
	Component as p__react__component,
} from '~/react'
import {
	Link as p__react_router_dom__link,
} from '~/react-router-dom'
//
const $ = p__react_hyperscript
//
export default class extends p__react__component {
	render = () => {
		return [
			$('ul.list', [
				$('li', [
					$(p__react_router_dom__link, {
						to: '/',
					}, [
						'page',
					]),
				]),
			]),
		][0]
	}
}
