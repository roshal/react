import component from './components/app'
import loaded from './scripts/modules/loaded'
//
import {
	createElement as react__create_element,
} from 'react'
//
import {
	render as react_dom__render,
} from 'react-dom'
//
const container = document.createElement('div')
react_dom__render(react__create_element(component), container)
loaded(document, (element) => {
	element.body.appendChild(container)
})
