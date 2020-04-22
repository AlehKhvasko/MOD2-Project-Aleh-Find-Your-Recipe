import React from 'react';
import Ingredients from './Ingredients';



export default function Block({info}) {
    const {label,image,url, ingredients} = info.recipe;
    return (
    <div className='blocks'>
        <h2>{label}</h2>
        <img 
        src={image}
         alt="#"/>
        <a href={url} target="_blank" rel="noopener noreferrer">Link</a>
        <button>Ingredients</button>
        <Ingredients ingredients={ingredients}/>
    </div>
    )
}
