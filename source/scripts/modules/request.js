//
export default async () => {
	try {
		const response = await fetch('//sregneva.now.sh/test_api/staff/', {
			method: 'GET',
		})
		const json = response.json()
		console.log(json)
	} catch (error) {
		console.error(error)
		return {
			status: 'connection error',
		}
	}
}
//	fetch('//sregneva.now.sh/test_api/staff/', {
//		method: 'GET',
//	}).then((response) => {
//		return response.json()
//	}).catch((error) => {
//		console.error(error)
//	}).then((json) => {
//		console.log(json)
//	})
