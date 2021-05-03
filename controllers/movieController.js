const  express = require("express");
const Movie = require("../models/Movie");
const routes = express.Router();

class MoviesController{

    //CRUD base 
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
            
            //Tratamento de erro aqui !!
            res.status(200).send("Filme salvo com sucesso")
        }else{
            res.status(400).send("Ocorreu um erro e o filme não foi salvo")
        }
        

    }

    async update(req, res){

    }

    async delete(req, res){
    }


    //Rotas extras
    async find(req , res){

    }

    async listByCategory(req, res){

    }

    async listByYear(req, res){

    }

    async listByScore(req, res){

    }

    

}

module.exports = new MoviesController;