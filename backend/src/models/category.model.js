const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema({
    categoryID: {
        type: String,
        required: true
    },
    cate_Pname: {
        type: String,
        required: true
    },
    cate_Sname: [{
        type: String,
    }],

});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;