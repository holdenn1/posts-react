export function checkHobbies (arr) {
	const selectedHobbies = arr.filter((item) => item.select !== false )
	return selectedHobbies
}