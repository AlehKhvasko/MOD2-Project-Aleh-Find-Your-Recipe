import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
display: flex;
justify-content:center;
margin:15px auto 0px auto ;
height:4em;
width:14em;
border-radius:100px;
background-color:papayawhip;
border:.9px solid black;
box-shadow:4px 4px 2px black;

&hover {
    background-color:grey;
}
`;


export default function Button(props) {
    return (
        <div>
            <ButtonStyled
            type="submit"
            onClick={props.ClickBtn}
            >Search</ButtonStyled>
        </div>
    )
}
