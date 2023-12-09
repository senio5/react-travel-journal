import React from "react";
import map from "../images/Map-Icon.png"

export default function Card(props){
    return(
        <div className="card">
            <div className="image">
                {props.card.image}
            </div>
            <div className="location-structure">
                <img className="location-icon" src={map} />
                <span><p className="location-text">{props.card.location}</p></span>
                <span><a className="link" href={props.card.googleMapUrl}>View on Google Maps</a></span>
            </div>
            <h3 className="title">{props.card.title}</h3>
            <div className="dates">
                <span>{props.card.startDate} - </span>
                <span>{props.card.endDate} </span>
            </div>
            <p className="info">{props.card.description}</p>
        </div>
    )
}