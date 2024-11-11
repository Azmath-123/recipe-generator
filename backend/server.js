const express =require('express');
const mongoose = require('mongoose');
const dotenv =require('dotenv');
const ingredientRoutes = require('./routes/ingredients');
const recipeRoutes = require('./routes/recipes')
const mealPlanRoutes = require('./routes/mealPlan');


dotenv.config();
const app=express();
app.use(express.json()); // Parse JSON payloads

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));
// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe Generator !');
});


app.use('/api/ingredients', ingredientRoutes);

app.use('/api/recipes', recipeRoutes);

app.use('/api/meal-plan', mealPlanRoutes);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
