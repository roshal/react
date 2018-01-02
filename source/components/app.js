import react_hyperscript from 'react-hyperscript'
//
import {
	Component as react__component,
} from 'react'
//
import {
	BrowserRouter as react_router_dom__browser_router,
	Route as react_router_dom__route,
} from 'react-router-dom'
//
import page_component from './page-component'
import page from './page'
//
export default class extends react__component {
	render = () => {
		return [
			react_hyperscript(react_router_dom__browser_router, [
				react_hyperscript('div.container', [
					react_hyperscript(react_router_dom__route, {
						exact: true,
						path: './',
						component: page,
					}),
					react_hyperscript(react_router_dom__route, {
						exact: true,
						path: './component',
						component: page_component,
					}),
				]),
			]),
		][0]
	}
}
