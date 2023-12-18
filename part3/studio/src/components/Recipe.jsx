import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.insidetherustickitchen.com/chicken-cacciatore/#ingredients-what-you-need";
   let authorPhoto = "https://www.insidetherustickitchen.com/wp-content/uploads/2021/02/Sidebar-profile-pix-150px.jpg";
   let authorName = "Emily and Nathan";


   return (
      <div>
         <img src={authorPhoto} alt = "CHICKEN CACCIATORE - POLLO ALLA CACCIATORA" style={{objectFit: "contain", borderRadius: "50%", width:"400px"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.insidetherustickitchen.com/wp-content/uploads/2020/08/Chicken-cacciatore-1200px-Inside-the-Rustic-Kitchen-1.jpg" alt="CHICKEN CACCIATORE - POLLO ALLA CACCIATORA" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
