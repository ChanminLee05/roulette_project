import React, {useState} from "react";
import './MainPage.css';
import { Link } from "react-router-dom";

export default function MainPage() {
    const [isFoodBackground, setFoodBackground] = useState(false);

    function changeBackgroundImg() {
        setFoodBackground(!isFoodBackground);
    }

    return(
        <div className={isFoodBackground ? "food-background" : "main-background"}>
            <div className="title-container">
                <h1 className="title">Click The Type Of Food You Want</h1>
                <div className="linkButton">
                    <Link to="/bread" className="link-btn" onClick={changeBackgroundImg}><p className="btn-txt">Bread</p></Link>
                    <Link to="/meat" className="link-btn" onClick={changeBackgroundImg}><p className="btn-txt">Meat</p></Link>
                    <Link to="/vegan" className="link-btn" onClick={changeBackgroundImg}><p className="btn-txt">Vegan</p></Link>
                    <Link to="/noodle" className="link-btn" onClick={changeBackgroundImg}><p className="btn-txt">Noodle</p></Link>
                </div>
            </div>

        </div>
    )
}