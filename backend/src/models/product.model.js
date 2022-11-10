const { Schema, default: mongoose } = require("mongoose");

const ProductSchema = new Schema({
    product_id: {
        type: String,
        required: true
    },
    cate_Pname: {
        type: String,
        required: true
    },
    cate_Sname: {
        type: String,

    },
    pro_name: {
        type: String,
        required: true
    },
    prod_desc: {
        type: String,

    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,

    },
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;