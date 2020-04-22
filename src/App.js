import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Button from './components/Button';

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


function App() {

const[someData,setSomeData] = useState('');
const[mainRecipe,setMainRecipe] = useState([]);

const APP_ID = 'a8e02ed5';
const APP_KEY='16dd19f01ad1a5fc17a8c9206134115b';
const url = `https://api.edamam.com/search?q=${someData}&app_id=${APP_ID}&app_key=${APP_KEY}`;  

// const recipeData = async() => {
//   try {
//     const data = await axios.get(url);
//     console.log(data.data + 'some data');
//   }
//   catch(error) {console.error()
//     ;}
// }

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
    <div className="App">
      <h1 >My Grandma's recipe</h1>
      <SearchForm
       inputChange={onChangeHandler}
       info={someData}></SearchForm>
      <Button ClickBtn={onSubmitHandler}></Button>
      <div>{mainRecipe.map(res =>
      <Block
        info={res.label}
        info2={res.image}
        info3={res.uri}
        info4={res.ingredientLines}
        info4={res.ingredientLines}
        info5={res.calories}
        ></Block>)}
      </div>
    </div>
  );
}

export default App;
