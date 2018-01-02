export default (element, callback) => {
	if (element.attachEvent ? element.readyState === 'complete' : element.readyState !== 'loading') {
		callback(element)
	} else {
		element.addEventListener('DOMContentLoaded', () => callback(element))
	}
}
