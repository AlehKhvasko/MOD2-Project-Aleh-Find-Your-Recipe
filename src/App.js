import React from 'react';
import './App.css';
import axios from 'axios';

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
      <h1 onClick={recipeData} >React food app</h1>
    </div>
  );
}

export default App;
