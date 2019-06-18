const router = require("express").Router();
const booksController = require("../controllers/booksController.js");
const db = require('../models/books');

router.route("/api/books")
    // return all saved books as JSON
    .get(booksController.findAll)
    // save a new book to the database
    .post(booksController.create);

router.route("/api/books/:id")
    // delete a book from the database
    .delete(booksController.remove);

module.exports = router;