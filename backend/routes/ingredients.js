const express = require('express');
const router = express.Router();

// Dummy array to store ingredients temporarily
let ingredientsArray = [];

// POST /ingredients
router.post('/', async (req, res) => {
    const { userId, ingredients } = req.body;

    try {
        // Create a new entry for testing purposes (no database interaction)
        const newEntry = {
            userId, 
            ingredients
        };

        // Push the new entry into the dummy array
        ingredientsArray.push(newEntry);

        // Send the updated ingredientsArray as a response for testing purposes
        res.status(201).json({
            message: 'Ingredients added successfully!',
            data: newEntry
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error!' });
    }
});

module.exports = router;
