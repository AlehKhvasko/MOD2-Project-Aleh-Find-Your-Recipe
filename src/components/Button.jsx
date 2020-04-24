import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    display: flex;
    justify-content:center;
    margin:40px auto;
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
