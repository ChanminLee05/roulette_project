import React, {useState} from "react";
import './MainPage.css';
import { Link } from "react-router-dom";

export default function MainPage() {
    const [isFoodBackground, setFoodBackground] = useState(false);

    function changeBackgroundImg() {
        setFoodBackground(!isFoodBackground);
    }

    console.log('Current image', isFoodBackground);
    return(
        <div className={isFoodBackground ? "food-background" : "main-background"}>
            <div className="title-container">
                <h1 className="title">Click The Type Of Food You Want</h1>
            </div>
            <div className="linkButton">
                <Link to="/rice" className="btn" onClick={changeBackgroundImg}><p className="btntxt">RICE</p></Link>
                <Link to="/noodle" className="btn" onClick={changeBackgroundImg}><p className="btntxt">NOODLE</p></Link>
                <Link to="/bread" className="btn" onClick={changeBackgroundImg}><p className="btntxt">BREAD</p></Link>
            </div>
        </div>
    )
}