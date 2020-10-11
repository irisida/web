const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
	const products = Product.fetchAll();
	res.render('shop', {
		products: products,
		docTitle: 'Shop',
		path: '/',
		isPopulated: products.length > 0,
		activeShop: true,
		productCSS: true,
	});
};

exports.getAddProduct = (req, res, next) => {
	res.render('add-product', {
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
