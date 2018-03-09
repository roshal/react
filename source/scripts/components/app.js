import package__react_hyperscript from 'react-hyperscript'
import {
	Component as package__react__component,
} from 'react'
import {
	Provider as package__react_redux__provider,
} from 'react-redux'
import {
	BrowserRouter as package__react_router_dom__browser_router,
	Route as package__react_router_dom__route,
} from 'react-router-dom'
//
import module__page from './page'
import module__page_component from './page-component'
import module__redux__store from '../redux/store'
//
const $ = package__react_hyperscript
export default class app extends package__react__component {
	render = () => {
		return [
			$(package__react_redux__provider, {
				store: module__redux__store(),
			}, [
				$(package__react_router_dom__browser_router, [
					$('div.container', [
						$(package__react_router_dom__route, {
							exact: true,
							path: '/',
							component: module__page,
						}),
						$(package__react_router_dom__route, {
							exact: true,
							path: '/component',
							component: module__page_component,
						}),
					]),
				]),
			]),
		][0]
	}
}
