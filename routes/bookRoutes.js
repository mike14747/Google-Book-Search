const router = require("express").Router();
const booksController = require("../controllers/booksController.js");

router.route("/api/books")
    // return all saved books as JSON
    .get(booksController.findAll)
    // save a new book to the database
    .post(booksController.create);

// router.get("/api/books", (req, res) => {
//     res.send("made it");
// });

router.route("/api/books/:id")
    // delete a book from the database
    .delete(booksController.remove);

// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

router.get("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;