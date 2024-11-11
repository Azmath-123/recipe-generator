const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /recipes
router.get('/', async (req, res) => {
    const { ingredients } = req.query; // e.g., "tomato,onion,garlic"

    if (!ingredients) {
        return res.status(400).json({ error: 'Please provide a list of ingredients' });
    }
    console.log(`API Request URL: https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${process.env.SPOONACULAR_API_KEY}`);

    try {
        // Call Spoonacular API
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/findByIngredients`,
            {
                params: {
                    ingredients,
                    number: 5, // Limit results to 5 recipes
                    apiKey: process.env.SPOONACULAR_API_KEY,
                },
            }
        );

        res.json(response.data); // Return the recipes
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

module.exports = router;
