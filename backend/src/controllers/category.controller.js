const Category = require("../models/category.model")

const getAll = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
}

const create = async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const Category = await newCategory.save();
        res.status(200).json(Category);
    } catch (err) {
        res.status(500).json(err);
    }
}

const update = async (req, res) => {
    try {
        const Category = await Category.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(Category);
    } catch (err) {
        res.status(500).json(err);
    }
}

const remove = async (req, res) => {
    try {
        const Category = await Category.findByIdAndDelete(req.params.id);
        res.status(200).json(Category);
    } catch (err) {
        res.status(500).json(err);
    }
}

const search = async (req, res) => {
    try {
        const Category = await Category.find(req.body)
        res.status(200).json(Category);
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