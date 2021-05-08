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
