import react_hyperscript from 'react-hyperscript'
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
	render = () => {
		return [
			react_hyperscript('ul.list', [
				react_hyperscript('li', [
					react_hyperscript(react_router_dom__link, {
						to: './',
					}, [
						'page',
					]),
				]),
			])
		][0]
	}
}
