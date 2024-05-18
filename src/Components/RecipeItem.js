import React, {useState} from 'react';
import "./RecipeItem.css";
import Heart from "../Assets/heart.png";

export default function RecipeItem({ recipe }) {
    // Destructure the {recipe} prop
    const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

    const [isActive, setIsActive] = useState(false);

    function handleToggle() {
        setIsActive(!isActive);
    }

    return(
        <div className="card-container">
            <div className="card">
                <img src={strMealThumb} alt={strMeal} className="card-img"/>
            </div>
            <div className="card-body">
                <span className="card-txt"><i className="category">Category:</i> {strCategory}</span>
                <a href={`/recipe/${idMeal}`} target="_blank" rel="noopener noreferrer" className="food-link">
                    <h3 className="link-txt">{strMeal}</h3>
                </a>
                <button type="button" className={`heart-btn btn ${isActive ? 'btn-danger' : ''}`} data-bs-toggle="button" onClick={handleToggle}>
                    <img className="heart-img" src={Heart} alt={Heart}/>
                </button>
            </div>
        </div>
    )
}