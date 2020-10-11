const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('admin/add-product', {
		docTitle: 'Add new Product',
		path: '/admin/add-product',
		activeProduct: true,
		productCSS: true,
		formsCSS: true,
	});
};

exports.postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	product.save();
	res.redirect('/');
};

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('admin/product-list', {
			products: products,
			docTitle: 'Admin Products',
			path: '/admin/products',
		});
	});
};
