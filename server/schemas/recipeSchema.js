const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    photos: {
        type: Array,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    preparation: {
        type: Array,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    },
    favorite: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("recipeModel", recipeSchema)