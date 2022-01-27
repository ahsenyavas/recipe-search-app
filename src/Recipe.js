
const Recipe = ({label, image, calories}) => {
  return(
      <div>
          <h1>{label}</h1>
          <p>Calories: {calories}</p>
          <img src={image} alt={label} />
      </div>
  )
};

export default Recipe;
