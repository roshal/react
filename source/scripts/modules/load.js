export default (element, callback) => {
	if (element.readyState == 'loading') {
		element.addEventListener('DOMContentLoaded', () => callback(element))
	} else {
		callback(element)
	}
}
