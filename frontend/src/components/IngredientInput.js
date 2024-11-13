import React, { useState } from 'react';
import { saveIngredients } from '../api/api';

const IngredientInput = ({ onSubmit }) => {
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ingredientArray = ingredients.split(',').map((item) => item.trim());
        try {
            await saveIngredients({ userId: '12345', ingredients: ingredientArray });
            onSubmit(ingredientArray);
            alert('Ingredients saved successfully!');
        } catch (error) {
            console.error('Error saving ingredients:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Enter Ingredients</h2>
            <input
                type="text"
                placeholder="e.g., tomato, onion, garlic"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default IngredientInput;
