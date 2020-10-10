const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const express = require('express');
const app = express();

// global values
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminData.routes);

app.use((req, res, next) => {
	res.status(404).render('404', { docTitle: '404' });
});

app.listen(3000);