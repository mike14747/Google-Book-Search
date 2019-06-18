const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
const routes = require("./routes/bookRoutes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false }, error => {
    if (error) {
        console.log(error);
    } else {
        console.log("Mongoose has connected to the db!");
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}.`);
});
