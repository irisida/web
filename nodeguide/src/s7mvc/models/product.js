const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '../', 'data', 'products.json');

const getProductsFromFile = (callback) => {
	fs.readFile(p, (err, fileData) => {
		if (err) {
			return callback([]);
		}
		callback(JSON.parse(fileData));
	});
};

module.exports = class Product {
	constructor(title, imageUrl, description, price) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	save() {
		getProductsFromFile((products) => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll(callback) {
		getProductsFromFile(callback);
	}
};
