import React from 'react';
import styled from 'styled-components';


const StyledMain = styled.div`
    display:flex;
    flex-flow:column;
    justify-content:center;
    text-align:center;
    margin:10px auto;
`
const StyledImage = styled.img`
    box-shadow:20px 20px 14px black;
    margin:10px auto;
`
const StyledHeader = styled.div`
    width:50vw;
    margin:10px auto;
`
const StyledArticle = styled.div`
    width:80vw;
    margin:50px auto;
    border:2px solid black;
    padding: 30px;
    background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlCKPdf5yg-Vd_qtb38eSja4k56ORRA4xE9UiPBZybrcMGET1t&usqp=CAU');
    background-size:cover;
    box-shadow:20px 20px 14px black;
    letter-spacing:.05em;
    text-align:left;
`


export default function MotivationStateless(props) {
    return (
        <StyledMain>
            <StyledHeader>
                <h1>{props.main}</h1>
                <h2>{props.header}</h2>
            </StyledHeader>
            <StyledArticle>
                <article>{props.article}</article>
                <article>{props.article2}</article>
                <article>{props.article3}</article>
                <article>{props.article4}</article>
            </StyledArticle>
            <StyledImage src={props.image} alt="no image to display" width='60%'/>
        </StyledMain>
    )
}
