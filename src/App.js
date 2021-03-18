import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "05ee4760";
  const APP_KEY = "bed80e643616fa6e8403f45658c2baed";

  useEffect(async () => {
    getRecipies();
  }, []);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-from">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
