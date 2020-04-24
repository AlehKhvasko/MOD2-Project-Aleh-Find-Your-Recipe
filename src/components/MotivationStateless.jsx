import React from 'react';
import styled from 'styled-components';


const StyledMain = styled.div`
    display:flex;
    flex-flow:column;
    justify-content:center;
    text-align:center;
    margin:10px auto;
`

export default function MotivationStateless(props) {
    return (
        <StyledMain>
            <h1>{props.main}</h1>
            <h2>{props.header}</h2>
            <article>{props.article}</article>
            <article>{props.article2}</article>
            <article>{props.article3}</article>
            <article>{props.article4}</article>
            <img src={props.image} alt="no image to display" width='60%'/>
        </StyledMain>
    )
}
