const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    ingredients: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
