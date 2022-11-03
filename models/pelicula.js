const Sequelize = require('sequelize');

const Pelicula = (sequelize) =>{
    sequelize.define('Pelicula',{
        nombrePelicula:{
            type: Sequelize.STRING,
            allowNull: true,
            primaryKey: true,
        },
        descripcionPelicula: Sequelize.STRING,
        generoPelicula: Sequelize.STRING
    })
}

module.exports = Pelicula;