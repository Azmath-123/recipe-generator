import React, { useState } from 'react';
import { getRecipes } from '../api/api';

const RecipeSuggestions = ({ ingredients }) => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        try {
            const response = await getRecipes(ingredients);
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div>
            <h2>Recipe Suggestions</h2>
            <button onClick={fetchRecipes}>Get Recipes</button>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeSuggestions;
