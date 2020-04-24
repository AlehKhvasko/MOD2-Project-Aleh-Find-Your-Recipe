import React, {useState} from 'react';
import Ingredients from './Ingredients';
import styled from 'styled-components';

const BlockStyled = styled.div`
    display: flex;
    margin-top:20px;
    flex-flow:column wrap;
    align-items:center;
    justify-content:space-evenly;
    background-color:rgb(171, 155, 154, 0.3);
    border-radius:50px;
    box-shadow:6px 6px 2px black;
    padding-bottom:30px;
`
const NameStyled = styled.h2`
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style:cursive;
    text-align:center;
    color: #b8d1d4;
    font-style: italic;
    padding:5px;
    font-size:1.4em;
    text-shadow:2px 2px 1px black;
    width:300px;
    
`;
const ImageStyled = styled.img`
    width: 300px;
    box-shadow:5px 5px 2px black;
    border: 2px solid black;
    transition-delay: 400ms; 

    &:hover {
        border:4px solid rgb(207, 32, 21);
        transform:scale(1.08);
        margin:-3px;
        
    }
`;

const StyledA =styled.a`
    margin-top:10px;
    padding:10px;
    color:green;
    font-size:0.9em;
    text-shadow:2px 2px 1 white;
    text-decoration:none;
    border:2px solid white;
    background-color:white;
    border-radius: 150px;
    opacity:0.4;
    box-shadow:2px 2px 1px green;

    &:hover {
       opacity: 0.8; 
    }
`;

const ButtonStyled = styled.button`
    display: flex;
    justify-content:center;
    margin:15px auto;
    height:3.3em;
    width:16em;
    border-radius:100px;
    background-color:papayawhip;
    border:.9px solid black;
    box-shadow:4px 4px 2px black;
    font-weight:bold;
    text-transform:uppercase;

&:hover {
    background-color:lightyellow;
    border:1.9px solid lightgrey;
}
`
const StyledCal = styled.div`   
    padding:15px;
    text-shadow:2px 2px 1px black;
    color: #b8d1d4;
    font-style: italic;
`

export default function Block({info}) {

    const[visible,setVisible]= useState(false);

    const {label,image,url, ingredients,calories} = info.recipe;
    return (
    <BlockStyled>
        <NameStyled>{label.length < 20 ? label : label.substring(0,20)+ '...'}</NameStyled>
        <ImageStyled 
        src={image}
         alt="#"/>
         <StyledCal>{Math.floor(calories)} Cal.</StyledCal>
        <StyledA href={url} target="_blank" rel="noopener noreferrer">See full recipe &rarr;</StyledA>
        <ButtonStyled onClick={() => setVisible(!visible)}>Ingredients</ButtonStyled>
        {visible ? <Ingredients 
        className="ingredients"
        ingredients={ingredients}/>:null}
    </BlockStyled>
    )
}
