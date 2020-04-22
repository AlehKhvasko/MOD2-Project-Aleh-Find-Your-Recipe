import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Button from './components/Button';
import Block from './components/Block';
import styled from 'styled-components';


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
const Title = styled.h1`
padding:1vh 0;
display: flex;
flex-flow:column;
align-items:center;
justify-content:center;
color:rgb(237, 117, 47);
`;



const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(5,1fr);
  grid-template-rows:repeat(2,1fr);
  justify-content:space-evenly;
  align-items:flex-start;
  text-align:center;
`

function App() {

const[someData,setSomeData] = useState('');
const[mainRecipe,setMainRecipe] = useState([]);

const APP_ID = 'a8e02ed5';
const APP_KEY='16dd19f01ad1a5fc17a8c9206134115b';
const url = `https://api.edamam.com/search?q=${someData}&app_id=${APP_ID}&app_key=${APP_KEY}`;  

const onSubmitHandler = async(event) => {
  event.preventDefault();
  const res = await axios.get(url);
  console.log(res);
  setMainRecipe(res.data.hits)
  setSomeData('');
}

const onChangeHandler = (event) => {
  setSomeData(event.target.value);

}
 



return (
      <div className='App'>
          <Title><h1>My Grandma's recipe</h1></Title>
          <SearchForm
          inputChange={onChangeHandler}
          info={someData}></SearchForm>
          <Button ClickBtn={onSubmitHandler}></Button>
          <Grid >{mainRecipe.map((res, index) =>
              <Block 
              key={index}
              info={res}
              />
          )}
          </Grid>
      </div >
  );
}

export default App;
