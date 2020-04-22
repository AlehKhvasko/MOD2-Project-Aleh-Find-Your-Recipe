import React, {useState} from 'react';
import Ingredients from './Ingredients';
import styled from 'styled-components';

const BlockStyled = styled.div`
    display: flex;
    flex-flow:column wrap;
    align-items:center;
    justify-content:space-evenly;
`
const NameStyled = styled.h2`
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style:cursive;
    text-align:center;
    color: red;
    padding:5px;
    font-size:1.2em;
    text-shadow:2px 2px 1px black;
`;
const ImageStyled = styled.img`
    width: 300px;
    box-shadow:5px 5px 2px black;
    border: 2px solid black; 
`;

const StyledA =styled.a`
    padding:10px;
    color:green;
    text-shadow:1px 1px 0.5 white;
`;

const ButtonStyled = styled.button`
    display: flex;
    justify-content:center;
    margin:15px auto 0px auto ;
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


export default function Block({info}) {

    const[visible,setVisible]= useState(false);

    const {label,image,url, ingredients} = info.recipe;
    return (
    <BlockStyled>
        <NameStyled>{label}</NameStyled>
        <ImageStyled 
        src={image}
         alt="#"/>
        <StyledA href={url} target="_blank" rel="noopener noreferrer">More info</StyledA>
        <ButtonStyled onClick={() => setVisible(!visible)}>Ingredients</ButtonStyled>
        {visible ? <Ingredients 
        className="ingredients"
        ingredients={ingredients}/>:null}
    </BlockStyled>
    )
}
