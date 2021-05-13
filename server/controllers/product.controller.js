const { request, response } = require('express');
const Product = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Product Database"

    })
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
    .then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.getAllProdcuts = (request, response) => {
    Product.find({})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.getProduct = (request,response) => {
    Product.findOne({_id:request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.updateProduct = (request,response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(updateProduct => response.json(updateProduct))
    .catch(err => console.log(err))
}

module.exports.deleteProduct = (request,response) => {
    Product.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}

