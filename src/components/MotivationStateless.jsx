import React from 'react';


export default function MotivationStateless(props) {
    return (
        <div>
            <h1>{props.main}</h1>
            <h2>{props.header}</h2>
            <article>{props.article}</article>
            <article>{props.article2}</article>
            <article>{props.article3}</article>
            <article>{props.article4}</article>
            <img src={props.image} alt="no image to display"/>
        </div>
    )
}
