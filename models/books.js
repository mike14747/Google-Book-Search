const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
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
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const Book = mongoose.model('Book', schema);

module.exports = Book;