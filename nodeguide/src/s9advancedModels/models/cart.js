const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '../', 'data', 'cart.json');

module.exports = class Cart {
	static addProduct(id, productPrice) {
		/* read the cart datafile */
		fs.readFile(p, (err, fileData) => {
			let cart = { products: [], totalPrice: 0 };
			if (!err) {
				cart = JSON.parse(fileData);
			}
			/* search for product in the cart */
			const existingProduct = cart.products.find((prod) => prod.id === id);
			let updatedProduct;
			if (existingProduct) {
				/* increase the quality of a found product */
				updatedProduct = { ...existingProduct };
				updatedProduct.qty = updatedProduct.qty + 1;
			} else {
				updatedProduct = { id: id, qty: 1 };
			}
			/* update the pricing */
			cart.totalPrice = cart.totalPrice + productPrice;
		});
	}
};
