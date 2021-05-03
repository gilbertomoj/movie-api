const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    year: {
        type: Number,
        default: true
    },
    actors: {
        type: Array,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    scoreMedia:{
        type: Number,
        required: false
    },
    trailer:{
        type: String,
        required: false
    },
    reviews:{
        type: Array,
        required: false
    }

})

module.exports = mongoose.model('movie', movieSchema);