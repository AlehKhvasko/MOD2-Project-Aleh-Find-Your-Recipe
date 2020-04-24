import React from 'react';
import MotivationStateless from './MotivationStateless';
import {Link} from 'react-router-dom';



export default function Motivation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/top">Top 5 recipes</Link>
            <MotivationStateless
            main={'Why Home Cooking?'}
            header={'Kitchen Confidential: The Health and Social Benefits of Home-Cooked Meals'}
            article={"There are so many reasons to cook at home, it’s surprising that we aren’t all doing it at least some of the time. For starters, research shows that regularly eating home-cooked meals as a family is linked to healthier and happier kids, and teens who are less likely to use alcohol, drugs, or cigarettes."}
            article2={"Adults also reap considerable benefits from eating home-cooked meals. Research finds that people who eat home-cooked meals on a regular basis tend to be happier and healthier and consume less sugar and processed foods, which can result in higher energy levels and better mental health.4 Eating home-cooked meals five or more days a week is even associated with a longer life."}
            article3={"Those mental health benefits increase considerably when we eat home-cooked meals with other people. In fact, communal meals can make us feel happier even outside of meal times. That’s partly because social connections reinforced over meals can help us cultivate a sense of belonging and even reduce symptoms of depression. Sharing the joy of home cooking also preserves cultural knowledge and history as we pass recipes from generation to generation."}
            article4={"As if all that weren’t enough, home-cooked meals can also benefit the environment – and all of us, by extension – by saving money and reducing our carbon footprint.6 Home cooking gives us the opportunity to choose component ingredients over processed meals, which cuts down on packaging. Buy those ingredients from local farmers or grow your own, and you’ll make an even bigger impact on the environment by significantly reducing the amount of transportation required to get food to your plate."}
            image={'https://www.fix.com/assets/content/19020/how-to-cook-more-at-home-002.jpg'}
            />
        </div>
    )
}
