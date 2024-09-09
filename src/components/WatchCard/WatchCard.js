import React from "react";
import "./WatchCard.css";
import { THEME } from "../../config/data";

function WatchCard(props) {
    const {title ,description,imgUrl,price} =props
    return(
        <div className="watch-card">
            <img 
            src={imgUrl}
            className="watch-card-img"
            alt="watch"/>
            <h1 className="watch-card-title" style={{color:THEME.main}}>{title}</h1>
            <p>{description}</p>
            {
                price?
            <p className="watch-card-price">₹ {price}</p>
            :"Not Available"
            }
            <button className="watch-card-button" style={{color:THEME.main}}>Add To Card</button>
        </div>
    )
}
export default WatchCard