import React from 'react';
import TopStateless from './TopStateless';
import styled from 'styled-components';
import TopHeader from './TopHeader';
import {Link} from 'react-router-dom';



const StyledMain = styled.div`
   background-image:url('https://images-na.ssl-images-amazon.com/images/I/71PjKkhUqvL._AC_SL1134_.jpg');
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
   margin-top:-100px;
`;

const StyledDiv = styled.div`
    display:grid;
    grid-template-columns:repeat(3,0.5fr);
    padding:10px;
    grid-gap:100px;
`;

const StyledHeader = styled.div`
    margin:100px auto 0 auto;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    text-align:center;
    font-size:1.5em;
    color:white;
    text-shadow:2px 2px 1px black;
    border:4px solid black;
    background-image:url('https://i.pinimg.com/736x/81/4d/e8/814de875dcd72f4398fb42965fd11a83.jpg');  
`;

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

&:hover {
    background-color:lightyellow;
    border:1.9px solid lightgrey;
    transform:scale(1.2);
    border-radius:20px;
    border:2.9px solid orangered;
}
`;

export default function Top() {
    return (
       <StyledMain> 
        <StyledHeader>
        <ButtonStyled><Link to="/"> Home</Link></ButtonStyled>
        <ButtonStyled><Link to="/motivation"> Why to Cook?</Link></ButtonStyled>
            <TopHeader
            header={'Top 5 Breakfast Recipes'}
            article={'Rise and shine with our best-ever breakfast recipes.'} />
        <ButtonStyled><Link to="/top"> Top 5 recipes</Link></ButtonStyled>
        <ButtonStyled><Link to="/motivation">Why to Cook?</Link></ButtonStyled>
        </StyledHeader>
        <StyledDiv>
            <TopStateless
            imgpath={'https://www.paleorunningmomma.com/wp-content/uploads/2019/08/blueberry-pancakes-9.jpg'}
            title={'Blueberry French Toast'}
            article2={'Your family will love waking up to these good breakfast ideas like yummy pancakes, waffles, egg casseroles, French toasts and more.'}
            list={' 12 slices day-old white bread, crusts removed'}
            list2={' 12 slices day-old white bread, crusts removed'}
            list3={' 2 packages (8 ounces each) cream cheese'}
            list4={' 1 cup fresh or frozen blueberries'}
            list5={' 12 large eggs, lightly beaten'}
            list6={' 2 cups 2% milk'}
            list7={' 1/3 cup maple syrup or honey'}
            title2={'Sauce'}
            list8={' 1 cup sugar'}
            list9={' 1 cup water'}
            list10={' 2 tablespoons cornstarch'}
            list11={' 1 cup fresh or frozen blueberries'}
            list12={' 1 tablespoon butter'}
            />
            <TopStateless
            imgpath={'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Amish-Breakfast-Casserole_EXPS_GHBZ18_17826_B08_08_5b.jpg'}
                title={'Blueberry French Toast'}
                article2={"We've enjoyed a few hearty breakfast casseroles while visiting an Amish inn. When I asked for a recipe, one of the ladies told me the ingredients right off the top of her head. I modified it to create this quick and easy breakfast casserole my family loves. —Beth Notaro, Kokomo, Indiana"}
                list={' 1 pound sliced bacon, diced'}
                list2={' 1 medium sweet onion, chopped'}
                list3={' 6 large eggs, lightly beaten'}
                list4={' 4 cups frozen shredded hash brown potatoes, thawed'}
                list5={' 2 cups shredded cheddar cheese'}
                list6={' 1-1/2 cups Daisy 4% cottage cheese'}
                list7={' 1-1/4 cups shredded Swiss cheese'}
            />
            <TopStateless
                imgpath={'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps68617_MC163887B03_15_7b-696x696.jpg'}
                title={'Cream Cheese & Chive Omelet'}
                article2={"The first bite of creamy filling lets you know this isn’t any old omelet. Make it once, and we suspect you’ll be fixing it often. —Anne Troise, Manalapan, New Jersey"}
                list={' 1 tablespoon olive oil'}
                list2={' 4 large eggs'}
                list3={' 2 tablespoons minced chives'}
                list4={' 2 tablespoons water'}
                list5={' 1/8 teaspoon salt'}
                list6={' 1/8 teaspoon pepper'}
                list7={' 2 ounces cream cheese, cubed'}
                llist7={' Salsa'}
            />
            <TopStateless
                imgpath={'https://d1alt1wkdk73qo.cloudfront.net/images/guide/23fcc0ce73924cb79cc87a1d4911ded4/478x640_ac.jpg'}
                title={'True Belgian Waffles'}
                article2={"It was on a visit to my husband’s relatives in Belgium that I was given this recipe. Back in the U.S., I served the waffles to his Belgian-born grandmother. She said they tasted just like home. Our grandkids love these waffles with any kind of topping: blueberries, strawberries, raspberries, fried apples, powdered sugar or whipped topping. -Rose Delemeester, St. Charles, Michigan"}
                list={' 2 cups all-purpose flour'}
                list2={' 3/4 cup sugar'}
                list3={' 3-1/2 teaspoons baking powder'}
                list4={' 2 large eggs, separated'}
                list5={' 1-1/2 cups whole milk'}
                list6={' 1 cup butter, melted'}
                list7={' 1 teaspoon vanilla extract'}
                llist7={' Sliced fresh strawberries or syrup'}
            />
            <TopStateless
                imgpath={'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps146146_TH153345D07_21_5b.jpg'}
                title={'Eggs Florentine Casserole'}
                article2={"It was on a visit to my husband’s relatives in Belgium that I was given this recipe. Back in the U.S., I served the waffles to his Belgian-born grandmother. She said they tasted just like home. Our grandkids love these waffles with any kind of topping: blueberries, strawberries, raspberries, fried apples, powdered sugar or whipped topping. -Rose Delemeester, St. Charles, Michigan"}
                list={' 1 pound bulk pork sausage'}
                list2={' 2 tablespoons butter'}
                list3={' 3-1/2 teaspoons baking powder'}
                list4={' 1 large onion, chopped'}
                list5={' 1 cup sliced fresh mushrooms'}
                list6={' 1 package (10 ounces) frozen chopped spinach, thawed and squeezed dry'}
                list7={' 12 large eggs'}
                llist7={' 2 cups 2% milk'}
                llist1={' 1 cup shredded Swiss cheese'}
                llist2={' 1 cup shredded sharp cheddar cheese'}
                llist3={' 1/4 teaspoon paprika'}
            />
        </StyledDiv>
        </StyledMain>       
    )
}
