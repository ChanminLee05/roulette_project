import React from 'react';
import './SideBar.css';
import Forum from '../Assets/conversation.png';
import FoodBuzz from '../Assets/foodbuzz.JPG';
import FoodCandy from '../Assets/foodcandy.JPG';
import BakeSpace from '../Assets/bakespace.JPG';
import SearchBar from "./SearchBar";

export default function SideBar() {

    return(
        <div className="sidebar-container">
            <SearchBar />
            <div className="forum-container container">
                <button className="side-btn btn btn-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <img className="forum-img" src={Forum} alt={Forum}/>
                </button>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title" id="staticBackdropLabel">Cooking Community</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="line-break"></div>
                <div className="offcanvas-body">
                    <p className="body-txt">Welcome to our Explore Recipes section! Here,
                        we've curated a selection of fantastic websites that offer a treasure trove of recipes and culinary inspiration.</p>
                    <div className="body-container">
                        <div className="card com-container">
                            <div className="card-header">
                                <h2>Online Food Blog Community</h2>
                            </div>
                            <div className="card-body">
                                <div className="sub-card">
                                    <h5 className="card-title">Food Buzz</h5>
                                    <p className="card-text">We share award-winning  recipes from around the world</p>
                                    <div className="foot-container">
                                        <img className="com-img" src={FoodBuzz} alt={FoodBuzz}/>
                                        <a href="https://simplysplendidfood.com/introduction/" className="btn btn-info com-btn d-grid" target="_blank" rel="noreferrer">Link</a>
                                    </div>
                                </div>
                                <div className="sub-card">
                                    <h5 className="card-title">Food Candy</h5>
                                    <p className="card-text">Give Yourself a low-FODMAP Gut Check with Weekly Meal Planning</p>
                                    <div className="foot-container">
                                        <img className="com-img" src={FoodCandy} alt={FoodCandy}/>
                                        <a href="https://foodcandy.com/" className="btn btn-info com-btn d-grid" target="_blank" rel="noreferrer">Link</a>
                                    </div>
                                </div>
                                <div className="sub-card">
                                    <h5 className="card-title">Bake Space</h5>
                                    <p className="card-text">The Place Where People Come For The Food</p>
                                    <div className="foot-container">
                                        <img className="com-img" src={BakeSpace} alt={BakeSpace}/>
                                        <a href="https://www.bakespace.com/" className="btn btn-info com-btn d-grid" target="_blank" rel="noreferrer">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}