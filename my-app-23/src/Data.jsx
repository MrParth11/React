import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const Data = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

            try {
                const response = await axios.get(apiUrl);
                if (response.data.meals) {
                    setRecipes(response.data.meals);
                } else {
                    setError('Recipes not found');
                }
            } catch (error) {
                setError(error.message);
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="cs-loader show">
                <div className="cs-loader__media">
                    <img
                        loading="lazy"
                        src="https://www.bigmpizza.com/static/media/loader.dcda44e4fa1c198431d4.gif"
                        alt="Loading..."
                    />
                </div>
                <div className="waviy">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (recipes.length === 0) {
        return <div className="no-recipes">Recipes not found</div>;
    }

    return (
        <div className="main-content">
            {recipes.map((recipe, index) => (
                <div className="product-details" key={index}>
                    <div className="product">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <div className="details">
                        <h1>{recipe.strMeal}</h1>
                        <p>{recipe.strCategory}</p>
                        <p>{recipe.strArea}</p>
                        <p className="price">${recipe.idMeal}</p>
                        <h2>Ingredients</h2>
                        <ul>
                            {getIngredients(recipe).map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                            ))}
                        </ul>
                        <h2>Instructions</h2>
                        <p>{recipe.strInstructions}</p>
                    </div>
                </div>
            ))}
            <div className="footer">
                This is the footer.
            </div>
        </div>
    );
};

const getIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;
        if (recipe[ingredientKey]) {
            ingredients.push(`${recipe[ingredientKey]} - ${recipe[measureKey]}`);
        } else {
            break;
        }
    }
    return ingredients;
};

export default Data;
