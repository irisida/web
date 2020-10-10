const express = require('express');
const path = require('path');

const rootDir = require('../utils/pathHelper');

const router = express.Router();

/* temporary storage */
const products = [];

router.get('/add-product', (req, res, next) => {
	res.render('add-product', {
		docTitle: 'Add new Product',
		path: '/admin/add-product',
	});
});

router.post('/add-product', (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect('/');
});

exports.routes = router;
exports.products = products;
