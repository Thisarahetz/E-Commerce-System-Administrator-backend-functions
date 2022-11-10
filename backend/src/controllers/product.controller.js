const Product = require("../models/product.model")

const getAll = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getById = async (req, res) => {
    try {
        const Product = await Product.findById(req.params.id);
        res.status(200).json(Product);
    } catch (err) {
        res.status(500).json(err);
    }
}

const create = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const Product = await newProduct.save();
        res.status(200).json(Product);
    } catch (err) {
        res.status(500).json(err);
    }
}

const update = async (req, res) => {
    try {
        const Product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(Product);
    } catch (err) {
        res.status(500).json(err);
    }
}

const remove = async (req, res) => {
    try {
        const Product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(Product);
    } catch (err) {
        res.status(500).json(err);
    }
}

const search = async (req, res) => {
    try {
        const Product = await Product.find(req.body)
        res.status(200).json(Product);
    } catch (err) {
        res.status(500).json(err);
    }
}

/*

{
    name: "val",
    rate: 0
}

*/

module.exports = {
    getAll,
    getById,
    search,
    create,
    update,
    remove
}