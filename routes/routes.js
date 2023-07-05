const express = require('express');
const router = express.Router();
const model = require('../model/model');

//route for api/planets
router.get('/planets', async (req, res) => {
    try {
        const data = await model.Planets.find();
        res.json(data)
    } catch (err) {
        res.json(err)
    }
})

router.get('/characters', async (req, res) => {
    try {
        const data = await model.Characters.find();
        res.json(data)
    } catch (err) {
        res.json(err)
    }
})

router.get('/films', async (req, res) => {
    try {
        const data = await model.Films.find();
        res.json(data)
    } catch (err) {
        res.json(err)
    }
})

router.get('/characters/:id', async (req, res) => {
    try {
        const data = await model.Characters.find({id: parseInt(req.params.id)})
        res.json(data)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/films/:id', async (req, res) => {
    try {
        const data = await model.Films.find({pk: parseInt(req.params.id)})
        res.json(data)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/planets/:id', async (req, res) => {
    try {
        const data = await model.Planets.find({id: parseInt(req.params.id)})
        res.json(data)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

//Lets select multiple ids using data.characters 
//characters from film where film id equals value
router.get('/films/:id/characters', async (req, res) => {
    try {
        const data = await model.Films.findOne({pk: parseInt(req.params.id)}).select({"fields": {"characters":1} });
        const data2 = await model.Characters.find({'id': {$in:data.fields.characters}})
        console.log(data.fields.characters)
        res.json(data2)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/films/:id/planets', async (req, res) => {
    try {
        const data = await model.Films.findOne({pk: parseInt(req.params.id)}).select({"fields": {"planets":1} });
        const data2 = await model.Planets.find({'id': {$in:data.fields.planets}})
        console.log(data.fields.planets)
        res.json(data2)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/characters/:id/films', async (req, res) => {
    try {
        const data = await model.Characters.findOne({id: parseInt(req.params.id)}).select({"id":1});
        console.log(data.id)
        res.json(data)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/planets/:id/films', (req, res) => {
    res.send('Get All Planets')
})

router.get('/planets/:id/characters', (req, res) => {
    res.send('Get All Planets')
})

module.exports = router