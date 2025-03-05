import React from 'react';
import '../App.css';

export default function Book(props) {

    return ( <li> {props.title}: {props.author}</li> );



}