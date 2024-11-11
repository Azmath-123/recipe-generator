const express = require('express');
const router = express.Router();
const Ingredient = require('../models/Ingredients');

// POST /ingredients
router.post('/', async (req, res) => {
    const { userId, ingredients } = req.body;
    try {
        const newEntry = new Ingredient({ userId, ingredients });
        await newEntry.save();
        res.status(201).json({ message: 'Ingredients saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Server error!' });
    }
});

module.exports = router;
