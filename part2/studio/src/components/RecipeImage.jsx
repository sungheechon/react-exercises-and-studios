import recipedata from "./recipe.json";
import './styling.css';

function RecipeImage() {

  let recipeImg = recipedata.map(recipe => {
    return <img key={recipe.name} src={recipe.recipeImage} alt={recipe.name} className="recipeImage" />
  });

  return <div>{recipeImg}</div>;

}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
