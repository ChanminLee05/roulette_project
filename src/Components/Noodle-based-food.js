import React, {useState} from 'react';
import './SpinPage.css';
import {Link} from "react-router-dom";
import backArrowImg from "../Assets/back-arrow.png";
import SideBar from "./SideBar";

export default function Noodle() {
    const [rotation, setRotation] = useState(0);
    const [isFoodBackground, setFoodBackground] = useState(true);
    function spinRoulette() {
        const randomRotation = Math.floor(Math.random() * 360) + 360 * 5;
        setRotation(prevRotation => prevRotation + randomRotation);
    }

    function changeBackgroundImg() {
        setFoodBackground(!isFoodBackground);
    }

    return(
        <div className={isFoodBackground ? "food-background" : "main-background"}>
            <div className="food-desc-container">
                <div className="food-txt-container">
                    <h1 className="roulette-title">What To Eat Roulette Game</h1>
                    <p className="roulette-desc">The roulette game is a fun way to decide what to eat when you're feeling indecisive.
                        Simply select the type of food you're in the mood for, spin the roulette wheel,
                        and let it randomly choose your meal for you.
                        Once you've spun the wheel and settled on a meal choice, you can easily find recipes to prepare your selected dish.
                    </p>
                </div>
                <div className="img-container" onClick={changeBackgroundImg}>
                    <Link to="/main" className="back-link">
                        <img className="back-img" src={backArrowImg} alt={backArrowImg}/>
                    </Link>
                </div>
            </div>
            <div className="wheel-container">
                <button className="spinButton" onClick={spinRoulette}>spin</button>
                <div className="wheel" style={{ transform: `rotate(${rotation}deg)`}}>
                    <div className="roulette-item" style={{ background: '#db7093', transform: 'rotate(30deg)' }}><span>Yaki Udon</span></div>
                    <div className="roulette-item" style={{ background: '#20b2aa', transform: 'rotate(60deg)' }}><span>Ramen</span></div>
                    <div className="roulette-item" style={{ background: '#d63e92', transform: 'rotate(90deg)' }}><span>Seafood Pasta</span></div>
                    <div className="roulette-item" style={{ background: '#daa520', transform: 'rotate(120deg)' }}><span>Sesame Ramen</span></div>
                    <div className="roulette-item" style={{ background: '#ff340f', transform: 'rotate(150deg)' }}><span>Jjajangmyeon</span></div>
                    <div className="roulette-item" style={{ background: '#ff7f50', transform: 'rotate(180deg)' }}><span>Pho</span></div>
                    <div className="roulette-item" style={{ background: '#3cb371', transform: 'rotate(210deg)' }}><span>Udon</span></div>
                    <div className="roulette-item" style={{ background: '#4169e1', transform: 'rotate(240deg)' }}><span>Soba</span></div>
                    <div className="roulette-item" style={{ background: '#a970db', transform: 'rotate(270deg)' }}><span>Jjolmyeon</span></div>
                    <div className="roulette-item" style={{ background: '#0f6f7a', transform: 'rotate(300deg)' }}><span>Buldak</span></div>
                    <div className="roulette-item" style={{ background: '#ff500e', transform: 'rotate(330deg)' }}><span>Chicken Soup</span></div>
                    <div className="roulette-item" style={{ background: '#4374af', transform: 'rotate(360deg)' }}><span>Carbonara</span></div>
                </div>
            </div>
            <SideBar/>
        </div>
    )
}