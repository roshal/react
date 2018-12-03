//
import '/../images/logo-react.png'
//
import p__react_hyperscript from '~/react-hyperscript'
//
import {
	render as p__react_dom__render,
} from '~/react-dom'
//
import m__components__app from '/components/app'
import m__modules__load from '/modules/load'
//
const $ = p__react_hyperscript
const container = document.createElement('div')
p__react_dom__render(
	$(m__components__app),
	container,
)
m__modules__load(document, (element) => {
	element.body.appendChild(container)
})
