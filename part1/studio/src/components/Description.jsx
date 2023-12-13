import styles from './Description.module.css';
import React from 'react';

let recipeTitle = "Chimichurri Recipe";
let recipeShortDesc = "The most declicious Chimichurri Sauce this side of the Gulf";

const RecipeAuthor = () => {
    let authorLink = "https://cafedelites.com/";
    let authorPhoto = "https://cafedelites.com/wp-content/uploads/2023/02/Cafe-Delies-Profile-Picture.jpg";
    let authorName = "Karina X";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt={authorName} className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Chimichurri Recipe</a>
            </div>
        </div>
    );
};


class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>{recipeTitle}</h1>
                    <p>{recipeShortDesc}</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
};

export default RecipeDescription;