const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const getProductDataControler=require('../controller/products')
const products = [];

// /admin/add-product => GET
router.get('/add-product',getProductDataControler.getAddProduct );

// /admin/add-product => POST
router.post('/add-product',getProductDataControler.postAddProduct );

exports.routes = router;
exports.products = products;
