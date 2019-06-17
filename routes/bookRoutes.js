const router = require("express").Router();
// const booksController = require("../controllers/booksController.js");
const db = require('../models/books');

router.route('/api/books').get(function (req, res) {
    db.find(function (err, books) {
        if (err) {
            console.log(err);
        } else {
            res.json(books);
        }
    });
});
router.route('/api/books').post(function (req, res) {
    db
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(400).json(err));
});

// router.route("/api/books")
//     // return all saved books as JSON
//     .get(booksController.findAll)
//     // save a new book to the database
//     .post(booksController.create);

// router.route("/api/books/:id")
//     // delete a book from the database
//     .delete(booksController.remove);

// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;