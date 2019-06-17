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
    }
});
const Book = mongoose.model('Book', schema);

module.exports = Book;

// author: "Susan Gaber"
// description: "A hundred garden favorites rendered in black-and-white line illustrations will suggest numerous design and artistic uses. Amaryllis, anemone, begonia, cinquefoil, peony, snapdragon flow and weave, many forming borders and frames."
// id: "L1lnBXcSMdoC"
// image: "http://books.google.com/books/content?id=L1lnBXcSMdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
// key: "L1lnBXcSMdoC"
// link: "https://play.google.com/store/books/details?id=L1lnBXcSMdoC&source=gbs_api"
// title: "Treasury of Flower Designs for Artists, Embroiderers and Craftsmen"