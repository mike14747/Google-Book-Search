const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
});
const Book = mongoose.model('Book', schema);

module.exports = Book;