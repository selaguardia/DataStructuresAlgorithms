/*
Given a list of paired values, where the key is a product id and the value the category that product belongs to, write a function to group the ids according to their categories and return a new list of paired values containing categorized product Ids.
products = {
	123: "produce",
	234: "pantry",
	761: "produce",
	901: "dairy",
	139: "pantry" 
}

orderByCategory(products)
> products = {
	pantry: [234, 139],
	produce: [123,761],
	dairy: [901] 
}

*/