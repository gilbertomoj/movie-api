const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/",(req , res)=>{
    
    //res.json({movies: movies})
    //const filtro = movies[0].actors.filter( a => a == "Scarlett Johansson")
    res.json("API de filmes")

})
router.get("/movies", movieController.list)
router.post("/movie/create", movieController.create);



module.exports = router;