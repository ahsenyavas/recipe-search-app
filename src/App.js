import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

function App() {
  const APP_ID = "5afcd20c";
  const APP_KEY = "85e5b131a2865ab5e120611693a015e8";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("croissant");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          name="search"
          value={search}
          onChange={handleOnChange}
          placeholder="Enter your favorite dish"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe.label} {...recipe.recipe} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
