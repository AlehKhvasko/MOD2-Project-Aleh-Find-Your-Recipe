import React from 'react';
import MotivationStateless from './MotivationStateless';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const StyledMain = styled.div`
    background-color:#1c1e1e;
    color:black;
    font-weight:bold;
    font-size:1.5em;
    padding:20px;
    text-shadow:1px 1px .5px white;
    background-image:url('https://previews.123rf.com/images/pavelalexeev/pavelalexeev1611/pavelalexeev161100275/68960305-orange-hessian-sack-cloth-texture-abstract-background-and-texture-ideal-for-design-or-wallpaper-.jpg');
    background-size:cover;

`
const StyledHeader = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    background-image:url('https://i.pinimg.com/736x/81/4d/e8/814de875dcd72f4398fb42965fd11a83.jpg');
    height:13vh;
    font-size:1.5rem;
    border:4px solid black;
`
const ButtonStyled = styled.button`
    display: flex;
    justify-content:center;
    margin:15px auto 0px auto ;
    height:3.3em;
    width:12em;
    border-radius:10px;
    background-color:papayawhip;
    border:.9px solid black;
    box-shadow:4px 4px 2px black;
    font-weight:bold;
    font-size:1rem;
    text-transform:uppercase;
    transition-delay:200ms;
    text-decoration:none;
&:hover {
    background-color:lightyellow;
    border:1.9px solid lightgrey;
    transform:scale(1.2);
    border-radius:20px;
    border:2.9px solid orangered;
   
}
`;


export default function Motivation() {
    return (
        <div>
        <StyledHeader>  
        <ButtonStyled><Link to="/">Home</Link></ButtonStyled>
        <ButtonStyled><Link to="/top">Top 5 recipes</Link></ButtonStyled>
        <ButtonStyled><Link to="/motivation">Why to Cook?</Link></ButtonStyled>
        </StyledHeader>  
        <StyledMain>
            <MotivationStateless
            main={'Why Home Cooking?'}
            header={'Kitchen Confidential: The Health and Social Benefits of Home-Cooked Meals'}
            article={"There are so many reasons to cook at home, it’s surprising that we aren’t all doing it at least some of the time. For starters, research shows that regularly eating home-cooked meals as a family is linked to healthier and happier kids, and teens who are less likely to use alcohol, drugs, or cigarettes."}
            article2={"Adults also reap considerable benefits from eating home-cooked meals. Research finds that people who eat home-cooked meals on a regular basis tend to be happier and healthier and consume less sugar and processed foods, which can result in higher energy levels and better mental health.4 Eating home-cooked meals five or more days a week is even associated with a longer life."}
            article3={"Those mental health benefits increase considerably when we eat home-cooked meals with other people. In fact, communal meals can make us feel happier even outside of meal times. That’s partly because social connections reinforced over meals can help us cultivate a sense of belonging and even reduce symptoms of depression. Sharing the joy of home cooking also preserves cultural knowledge and history as we pass recipes from generation to generation."}
            article4={"As if all that weren’t enough, home-cooked meals can also benefit the environment – and all of us, by extension – by saving money and reducing our carbon footprint.6 Home cooking gives us the opportunity to choose component ingredients over processed meals, which cuts down on packaging. Buy those ingredients from local farmers or grow your own, and you’ll make an even bigger impact on the environment by significantly reducing the amount of transportation required to get food to your plate."}
            image={'https://www.fix.com/assets/content/19020/how-to-cook-more-at-home-002.jpg'}
            />
        </StyledMain>
        </div>
    )
}
