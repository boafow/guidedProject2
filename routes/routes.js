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
        const data = await model.Characters.findById(req.params.id)
        res.json(data)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/films/:id', async (req, res) => {
    try {
        const data = await model.Characters.findById(req.params.id)
        res.json(data)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/planets/:id', async (req, res) => {
    try {
        const data = await model.Planets.findById(req.params.id)
        res.json(data)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/films/:id/characters', (req, res) => {
    res.send('Get All Planets')
})

router.get('/films/:id/planets', (req, res) => {
    res.send('Get All Planets')
})

router.get('/characters/:id/films', (req, res) => {
    res.send('Get All Planets')
})

router.get('/planets/:id/films', (req, res) => {
    res.send('Get All Planets')
})

router.get('/planets/:id/characters', (req, res) => {
    res.send('Get All Planets')
})

module.exports = router