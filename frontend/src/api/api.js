import axios from 'axios';

const API = axios.create(
    {
    baseURL: 'http://localhost:5000/api',
}
);

export const saveIngredients = (data) => API.post('/ingredients', data);
export const getRecipes = (ingredients) =>
    API.get(`/recipes?ingredients=${ingredients.join(',')}`);




export const fetchMealPlan = async (userId, week) => {
    try {
        const response = await axios.get(`/api/meal-plan`, {
            params: { userId, week },
        });
        return response.data.days;
    } catch (error) {
        console.error('Failed to fetch meal plan:', error);
        return {};
    }
};