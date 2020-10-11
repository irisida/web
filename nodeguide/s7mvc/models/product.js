const fs = require('fs');
const path = require('path');

const products = [];

module.exports = class Product {
	constructor(t) {
		this.title = t;
	}

	save() {
		const p = path.join(__dirname, '../', 'data', 'products.json');
		fs.readFile(p, (err, fileData) => {
			let products = [];
			if (!err) {
				products = JSON.parse(fileData);
			}
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll() {
		return products;
	}
};
