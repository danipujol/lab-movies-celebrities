// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model.js");
const Movie = require("../models/Movie.model.js");
// all your routes here

//GET "/movies/create"
router.get("/create", (req, res, next) => {

  res.render("movies/new-movie.hbs")

 })
//!problemas

//POST "/movies/create"
router.post("/create", (req, res, next) => {
    Movie.create({
        title: String,
    genre: String,
    plot: String,
    cast: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Celebrity"  
        }
    ]
    })
    .then(()=> {
        res.redirect("/")
    })
    .catch((err) => {
        next(err)
    })
})




module.exports = router;