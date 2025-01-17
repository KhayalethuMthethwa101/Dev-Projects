import React from 'react';
import './card.css'

export default function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={props.image}></img>
            <h2 className='card-title'>{props.teamName}</h2>
            <p className='card-text'>Position: {props.position}</p>
        </div>
    )
}
