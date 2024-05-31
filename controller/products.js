const Product=require('../models/product')
const fs=require('fs')
exports.getAddProduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    })
}

exports.postAddProduct=(req, res, next) => {
 const product=new Product(req.body.title)
 product.save()
  fs.writeFileSync('product.txt',JSON.stringify(req.body.title),{flag:'a'})
    res.redirect('/');
  }


  exports.getProducts=(req, res, next) => {
 Product.fetchAllProducts((products)=>{
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
 })
  
    });
  }