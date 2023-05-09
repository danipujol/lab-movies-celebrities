// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrities = require("../models/Celebrity.model")

//! all your routes here

//GET:/celebrities/create
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs")
})

//POST: /celebrities/create
router.post("/create", (req, res, next) => {

    Celebrities.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    .then(()=>{
        console.log("celebridad creada")
        res.redirect("/celebrities/create")
    })
    .catch((err)=>{
        next(err)
    })
})


//GET: /celebrities
router.get("/", (req, res, next) => {
    Celebrities.find()
.then((allCelebrities)=>{
    //console.log(allCelebrities)
    res.render("celebrities/celebrities.hbs", {
        allCelebrities
    })
})
.catch((err)=>{
    next(err)
})
})



module.exports = router;