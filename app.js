const path = require('path');
const errorController=require('./controller/error')
const express = require('express');
const bodyParser = require('body-parser');
const fs=require('fs')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//fs.readFile('product.txt',)
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
  