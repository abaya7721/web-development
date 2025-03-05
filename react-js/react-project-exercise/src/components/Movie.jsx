import React from 'react';
import '../App.css';

export default function Movie(props) {

    return ( <li> {props.title}: {props.year}, {props.genre}, {props.globalGross} </li> );


}