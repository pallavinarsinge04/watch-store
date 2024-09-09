
import React from "react";
import "./Home.css";
import WatchCard from "./../../components/WatchCard/WatchCard";
import { products ,MAIN_TITLE, THEME } from "../../config/data";
function Home() {
    return(
        <div style={{backgroundColor:THEME.backgroundColor}}>
        <h1 className="main-title" style={{color:THEME.Highlight}}>{MAIN_TITLE}</h1>
        <div className="watch-card-container">
            {products.map((watchItem)=>{

                return <WatchCard
                imgUrl={watchItem.imgUrl}
                title={watchItem.title}
                description={watchItem.description}  
                price={watchItem.price}/>
            })}
        
        
        </div>
        </div>
    )
}
export default Home