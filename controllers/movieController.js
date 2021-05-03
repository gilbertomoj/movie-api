const  express = require("express");
const Movie = require("../models/Movie");
const routes = express.Router();

class MoviesController{
    async list(req, res){
        const movie = await Movie.find();
        res.send(movie)
    }

    async create(req, res){
        const { title , year , actors, synopsis, image , trailer } = req.body;

        const savedMovie = await Movie.create({
            title, 
            year,
            actors,
            synopsis,
            image,
            trailer
        })
        
        if(savedMovie != undefined){
            res.status(200).send("Filme salvo com sucesso")
        }else{
            res.status(400).send("Ocorreu um erro e o filme não foi salvo")
        }
        

    }
}
//Criação de Filmes
routes.post("/create", async (req , res)=>{

})
//Listagem de Filmes
routes.get("/list", async (req, res)=>{
    res.send("all movies")
})
//Listagem de Filmes por ID
routes.get("/list/:id", async (req , res)=>{

})

//Atualização de Filmes
routes.post("/update/:id", async (req, res)=>{

})

//Delete de Filmes
routes.post("/delete/movie/:id",async (req , res)=>{

})

module.exports = new MoviesController;