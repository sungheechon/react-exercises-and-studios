import recipedata from "./recipe.json";

function IngredientList() {

  const ingredientsListItems = recipedata.map(recipe => {
    return recipe.ingredients.map((ingredient, idx) => {
      return <li key={idx}>{ingredient}</li>
    });
  });

  return <div>{ingredientsListItems}</div>;
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
