const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name : {
        type : String,
        required: true,
        },
    quantity : {
        type: Number,
        required: true,
        },
    description : {
        type : String,
        required: true,
    },
    image : {
        type: String,
        required: false,
        },
    }

    )

    const Product = mongoose.model('Product', productSchema)
    module.exports = Product