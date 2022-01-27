import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "5afcd20c";
  const APP_KEY = "85e5b131a2865ab5e120611693a015e8";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleOnSubmit}>
        <input
          className="search-bar"
          type="text"
          name="search"
          value={search}
          onChange={handleOnChange}
          placeholder="Search"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe key={recipe.recipe.label} {...recipe.recipe} />
      ))}
    </div>
  );
}

export default App;
