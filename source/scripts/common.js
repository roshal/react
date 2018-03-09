import package__react_hyperscript from 'react-hyperscript'
import {
	render as package__react_dom__render,
} from 'react-dom'
//
import module__components__app from './components/app'
import module__modules__load from './modules/load'
//
const $ = package__react_hyperscript
const container = document.createElement('div')
package__react_dom__render(
	$(module__components__app),
	container,
)
module__modules__load(document, (element) => {
	element.body.appendChild(container)
})
