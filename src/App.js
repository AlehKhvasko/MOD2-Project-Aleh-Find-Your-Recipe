import React from 'react';
import './App.css';
import axios from 'axios';

//register on api.edamam.com and get valid recipe API
//install and use AXIOS
//create get request with AXIOS, use ID and KEY separate 
//store data in state
//create search form and use it as a component

//In plans:
//Implement semantic UI
//Try to use Redux
//Use Router to switch between pages

function App() {
const APP_ID = 'a8e02ed5';
const APP_KEY='16dd19f01ad1a5fc17a8c9206134115b';
const url = `https://api.edamam.com/search?q=shrimp&app_id=${APP_ID}&app_key=${APP_KEY}`;  

const recipeData = async() => {
  try {
    const data = await axios.get(url);
    console.log(data);
  }catch(error) {console.error()
    ;}
}

  
return (
    <div className="App">
      <h1 onClick={recipeData} >My Grandma's recipe</h1>
    </div>
  );
}

export default App;
