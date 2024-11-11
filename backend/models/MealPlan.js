const mongoose = require('mongoose');

const MealPlanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    week: { type: String, required: true }, // e.g., "2024-W45" (ISO week format)
    days: {
        type: Map,
        of: [String], // Array of recipe IDs
        default: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: [],
        },
    },
});

module.exports = mongoose.model('MealPlan', MealPlanSchema);
