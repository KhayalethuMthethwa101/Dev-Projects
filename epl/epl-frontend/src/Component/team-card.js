import React from 'react';
import './card.css'

export default function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={props.image}></img>
            <h3 className='card-title'>{props.teamName}</h3>
            <p className='card-text'>Position: {props.position}</p>
        </div>
    )
}
