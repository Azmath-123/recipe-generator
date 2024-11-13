import React, { useState } from 'react';
import IngredientInput from '../components/IngredientInput';
import RecipeSuggestions from '../components/RecipeSuggestions';


const Home = () => {
    const [ingredients, setIngredients] = useState([]);

    return (
        <div>
            <h1>Recipe Generator</h1>
            <IngredientInput onSubmit={(data) => setIngredients(data)} />
            {ingredients.length > 0 && <RecipeSuggestions ingredients={ingredients} />}
             {/* Recipe Suggestions Section */}
             {ingredients.length > 0 && (
                <RecipeSuggestions ingredients={ingredients} />
            )}
        
        </div>
    );
};

export default Home;
