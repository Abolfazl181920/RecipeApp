import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "64831bc3";
  const APP_KEY = "8dba4b49296f6e8d7a96c1151083bd55";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;