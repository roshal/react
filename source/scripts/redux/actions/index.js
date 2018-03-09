export const create_item = (item) => {
	return {
		type: 'create-item',
		item: item,
	}
}
export const remove_item = (item) => {
	return {
		type: 'remove-item',
		item: item,
	}
}
export const update_item = (item) => {
	return {
		type: 'update-item',
		item: item,
	}
}
