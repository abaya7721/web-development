import React from 'react';
import '../App.css';

export default function ItemCard(props) {

    return (
        <div className="item-card-box block-elements">
            <span className="item-card-title">{props.title} - {props.year} </span>
            <span> - {props.genre} -</span>
            <span> Dir. {props.director}</span>
            <span>&nbsp;{props.duration}
                &nbsp;{props.rating}&nbsp;
            </span>
            {props.globalGross} grossed
        </div>
    );
}