const path = require('path');

const express = require('express');
const productController=require('../controller/products')
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
