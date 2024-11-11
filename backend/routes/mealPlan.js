const express = require('express');
const router = express.Router();
const MealPlan = require('../models/MealPlan');

// POST /meal-plan: Create or update a meal plan
router.post('/', async (req, res) => {
    const { userId, week, days } = req.body;

    try {
        const mealPlan = await MealPlan.findOneAndUpdate(
            { userId, week },
            { days },
            { new: true, upsert: true }
        );
        res.status(200).json(mealPlan);
    } catch (error) {
        res.status(500).json({ error: 'Failed to save meal plan.' });
    }
});

// GET /meal-plan: Fetch a meal plan for a specific week
router.get('/', async (req, res) => {
    const { userId, week } = req.query;

    try {
        const mealPlan = await MealPlan.findOne({ userId, week });
        res.status(200).json(mealPlan || {});
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch meal plan.' });
    }
});

module.exports = router;
