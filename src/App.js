import React from "react";
import "./App.css";

const App = () => {
  const APP_ID = "05ee4760";
  const APP_KEY = "bed80e643616fa6e8403f45658c2baed";
  const ExampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

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
