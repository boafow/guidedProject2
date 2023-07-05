const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema(
    {
        id: Number,
        climate: String,
        surface_water: String,
        name: String,
        diameter: String,
        rotation_period: String,
        terrain: String,
        gravity: String,
        orbital_period: String,
        population: String
    }
);

const filmsSchema = new mongoose.Schema(
    {
        fields: {},
        model: String,
        pk: Number
    }
);

const charactersSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        gender: String,
        skin_color: String,
        hair_color: String,
        height: String,
        eye_color: String,
        mass: String,
        homeworld: Number,
        birth_year: String
    }
);

const filmsCharactersSchema = new mongoose.Schema(
    {
        film_id: Number,
        character_id: Number
    }
);

const filmsPlanetsSchema = new mongoose.Schema(
    {
        film_id: Number,
        planet_id: Number
    }
);

const Planets = mongoose.model('planets', planetsSchema);
const Films = mongoose.model('film', filmsSchema);
const Characters = mongoose.model('character', charactersSchema);
const Films_characters = mongoose.model('films_characters', filmsCharactersSchema);
const Films_planets = mongoose.model('films_planets', filmsPlanetsSchema);

module.exports = {
    Planets, Films, Characters, Films_characters, Films_planets
} 