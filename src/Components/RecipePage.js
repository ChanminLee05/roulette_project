import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import "./RecipePage.css";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
export default function RecipePage() {
    const { idMeal } = useParams();
    const [mealDetails, setMealDetails] = useState(null);

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                const res = await fetch(apiUrl + idMeal);
                const data = await res.json();
                setMealDetails(data.meals[0]);
            } catch (error) {
                console.error('Error fetching meal details:', error);
            }
        };

        fetchMealDetails();
    }, [idMeal]);

    if (!mealDetails) return <p>Loading...</p>;

    const { strMeal, strCategory, strArea, strInstructions, strMealThumb, ...ingredients } = mealDetails;

    const ingredientList = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = ingredients[`strIngredient${i}`];
        const measure = ingredients[`strMeasure${i}`];
        if (ingredient) {
            ingredientList.push(ingredient)
        }
        if (measure) {
            ingredientList.push(measure);
        }
    }

    return (
        <frame class="recipe-background">
        <div className="box-container">
            <div className="top">
                <img src={strMealThumb} alt={strMeal} className="top-img"/>
                <h2 className="top-title">{strMeal}</h2>
                <h3 className="top-category">Category: <span className="top-subCat">{strCategory}</span></h3>
                <h3 className="top-category">Country: <span className="top-subCat">{strArea}</span></h3>
            </div>
            <div className="mid">
            <h3 className="mid-txt">Ingredients:</h3>
                <div className="txt-container row m-2">
                    <h5 className="col-6">[Ingredients]</h5>
                    <h5 className="col-6">[Quantity]</h5>
                </div>
                <ul className="mid-list row">
                    {ingredientList.map((ingredient, index) => {
                        return (
                            <li key={index} className="mid-item col-6">
                                <div className="row">
                                <span className="ingredient col-6">{ingredient}</span>
                                <div className="break-line"></div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="bottom">
                <h3 className="bottom-title">Instructions</h3>
                <p className="bottom-txt">
                    {strInstructions.split('.')
                        .filter(sentence => sentence.trim() !== '')
                        .map((sentence, index) => {
                            const formattedSentence = sentence.trim().replace(/^STEP \d/i, '');

                            return (
                                <React.Fragment key={index}>
                                    {`STEP ${index + 1}. ${formattedSentence}`}
                                    <br/>
                                </React.Fragment>
                            )
                        })
                    }
                </p>
            </div>
        </div>
        </frame>
    )
}