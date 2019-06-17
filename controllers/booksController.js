const db = require("../models/books.js");

module.exports = {
    findAll: function (req, res) {
        db
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    create: function (req, res) {
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    remove: function (req, res) {
        db
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    }
};

// findAll: function (req, res) {
//     res.send("it got through again");
//     db
//         .find(req.query)
//         .sort({ date: -1 })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(400).json(err));
// }