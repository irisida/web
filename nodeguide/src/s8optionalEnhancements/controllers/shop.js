const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/index', {
			products: products,
			docTitle: 'Shop',
			path: '/',
		});
	});
};

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/product-list', {
			products: products,
			docTitle: 'All Products',
			path: '/products',
		});
	});
};

exports.getCart = (req, res, next) => {
	res.render('shop/cart', {
		docTitle: 'Your cart',
		path: '/cart',
	});
};

exports.getOrders = (req, res, next) => {
	res.render('shop/orders', {
		docTitle: 'Your Orders',
		path: '/orders',
	});
};

exports.getCheckout = (req, res, next) => {
	res.render('shop/checkout', {
		docTitle: 'Checkout',
		path: '/checkout',
	});
};
