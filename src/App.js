import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Button from './components/Button';
import Block from './components/Block';
import styled from 'styled-components';
import Error from './components/Error';
import {Link} from 'react-router-dom';


//register on api.edamam.com and get valid recipe API
//install and use AXIOS
//create get request with AXIOS, use ID and KEY separate 
//hide ID and Key in .env file
//store data in state
//create search form and use it as a component

//In plans:
//Implement semantic UI
//Try to use Redux
//Use Router to switch between pages

const KEY = process.env.REACT_APP_API_KEY;
const ID = process.env.REACT_APP_API_ID;

const Title = styled.h1`
font-size:4em;
display: flex;
flex-flow:column;
align-items:center;
justify-content:center;
color:rgb(237, 117, 47);
text-shadow:6px 6px 3px black;
`;



const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(5,1fr);
  grid-template-rows:repeat(3,1fr);
  grid-gap:1% 1%;
  justify-content:space-evenly;
  align-items:flex-start;
  text-align:center;
`

function App() {

const[someData,setSomeData] = useState('');
const[mainRecipe,setMainRecipe] = useState([]);
const[empty, setEmpty] = useState('')

const url = `https://api.edamam.com/search?q=${someData}&app_id=${ID}&app_key=${KEY}`;  

const onSubmitHandler = async(event) => {
  if(someData !== '') {
    event.preventDefault();
    const res = await axios.get(url);
    setMainRecipe(res.data.hits)
    setSomeData('');
  }else{
    setEmpty('Search bar is empty');
  }

}

const onChangeHandler = (event) => {
  setSomeData(event.target.value);

}
 

const StyledHeader = styled.div`
    display: flex;
    justify-content:space-around;
    align-items:center;
    font-size:2rem;
    text-decoration:none;
    text-align:center;
    font-size:1.5em;
    color:white;
    text-shadow:2px 2px 1px black;
    border:4px solid black;
    background-image:url('https://i.pinimg.com/736x/81/4d/e8/814de875dcd72f4398fb42965fd11a83.jpg'); 
    height:10vh;
    width:100vw;
    margin:0;
`

return (
      <div className='App'>
        <div className='App-header'>
        <StyledHeader>
            <Link to="/"> Home</Link>
            <Link to="/top"> Top 5 recipes</Link>
            <Link to="/motivation"> Why to cook?</Link>
        </StyledHeader>
            <Title>Grandma's Recipe</Title>
              <SearchForm
              inputChange={onChangeHandler}
              info={someData}></SearchForm>
              {empty ? <Error error={empty}/>:null}
              <Button ClickBtn={onSubmitHandler}></Button>

            <Grid >{mainRecipe.map((res, index) =>
                <Block 
                key={index}
                info={res}
                />
            )}
            </Grid>
        </div >
      </div>
  );
}

export default App;
