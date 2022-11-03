const path = require("path");
//const Consola = require("../utils/database").models.Consola;
const Pelicula = require("../utils/database").models.Pelicula;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");


exports.postAltaPelicula = (req,res)=>{
    //INSERT INTO Consola VALUES ()
    Pelicula.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Ocurrio un error")//Cliente
        })    
}

exports.getPeliculas = (req,res)=>{
    //SELECT * from Consola;
    Pelicula.findAll()
        .then(peliculas=>{
            console.log("Peliculas",peliculas);
            res.send(peliculas);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

