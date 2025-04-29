require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const useragent = require('express-useragent');

const connectDB = require('./server/config/db');

const app = express();
const PORT = 5000 || process.env.PORT;

connectDB();

app.use(express.static('public'));
app.use(expressLayouts);
app.use(useragent.express());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

app.use('/', require('./server/routes/main'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Example app listening at http://0.0.0.0:${PORT}`);
  }); 