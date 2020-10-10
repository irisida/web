const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// global values
app.engine(
	'handlebars',
	expressHbs({ layoutsDir: 'views/layouts', defaultLayout: 'main' })
);
app.set('view engine', 'handlebars');
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
