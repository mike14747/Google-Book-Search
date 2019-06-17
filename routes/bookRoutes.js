const router = require("express").Router();
const booksController = require("../controllers/booksController.js");

// router.post('/api/books', (req, res) => {
//     console.log(req.body);
//     db.Book.create(req.body)
//     .then(dbBook => console.log(dbBook))
//     .then((dbBook) => res.json(dbBook))
//     .catch(err => console.log(err));
// });

// router.get('/api/books', (req, res) => {
//     res.send("it got through");
//     // console.log(req.query);
//     // db.Book.find(req.query)
//     // .then(dbBook => console.log(dbBook))
//     // .then((dbBook) => res.json(dbBook))
//     // .catch(err => console.log(err));
// });

router.route("/api/books")
    // return all saved books as JSON
    .get(booksController.findAll)
    // save a new book to the database
    .post(booksController.create);

router.route("/api/books/:id")
    // delete a book from the database
    .delete(booksController.remove);

// // router.use(function (req, res) {
// //     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// // });

// router.get("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;