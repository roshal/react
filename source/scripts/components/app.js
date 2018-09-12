import p__react_hyperscript from 'react-hyperscript'
import {
	Component as p__react__component,
} from 'react'
import {
	Provider as p__react_redux__provider,
} from 'react-redux'
import {
	BrowserRouter as p__react_router_dom__browser_router,
	Route as p__react_router_dom__route,
} from 'react-router-dom'
//
import m__page from './page'
import m__page_component from './page-component'
import m__redux__store from '../redux/store'
//
const $ = p__react_hyperscript
export default class app extends p__react__component {
	render = () => {
		return [
			$(p__react_redux__provider, {
				store: m__redux__store(),
			}, [
				$(p__react_router_dom__browser_router, [
					$('div.container', [
						$(p__react_router_dom__route, {
							exact: true,
							path: '/',
							component: m__page,
						}),
						$(p__react_router_dom__route, {
							exact: true,
							path: '/component',
							component: m__page_component,
						}),
					]),
				]),
			]),
		][0]
	}
}
