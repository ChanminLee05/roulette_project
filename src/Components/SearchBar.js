import React, {useEffect, useState} from 'react';
import Search from "../Assets/search.png";
import "./SideBar.css";
import RecipeItem from "./RecipeItem";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
export default function SearchBar({ value, onChange }) {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] =useState("");
    const [recipes, setRecipes] = useState([]);

    const SearchRecipes = async () => {
        setIsLoading(true);
        const url = apiUrl + query;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setRecipes(data.meals);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        SearchRecipes();
    }, [query]);

    const handleSubmit = async event => {
        event.preventDefault();
        SearchRecipes();
    };

    return (
        <div className="search-container container">
            <button className="side-btn btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#searchModal" aria-controls="searchModal">
                <img className="icon-img" src={Search} alt={Search}/>
            </button>
            <div className="modal fade" id="searchModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="searchModalLabel">Our Recipe List</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="form-control">
                                <h3>Search Your Recipe</h3>
                                <input
                                    value={value}
                                    onChange={e => setQuery(e.target.value)}
                                    className="search-filter"
                                    placeholder="Search Recipes"
                                />
                                <input
                                    type="submit"
                                    className="submit-btn"
                                    value="Search"
                                />
                            </form>
                            <div className="recipe-container">
                                <div className="recipes">
                                    {isLoading ? (
                                        <p>Loading...</p>
                                    ) : recipes ? (
                                        recipes.map(recipe => (
                                            <RecipeItem
                                                key={recipe.idMeal}
                                                recipe={recipe}
                                            />
                                        ))
                                    ) : (
                                        <p>No meals found</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}