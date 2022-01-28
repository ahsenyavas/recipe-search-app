import style from "./recipe.module.css";
const Recipe = ({label, image, calories, ingredients}) => {
  return(
      <div className={style.recipe}>
          <h1>{label}</h1>
          <ul>
                {ingredients.map((ingredient,index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
          </ul>
          <p>Calories: {Math.floor(calories)}kcal</p>
          <img className={style.image} src={image} alt={label} />
      </div>
  )
};

export default Recipe;
