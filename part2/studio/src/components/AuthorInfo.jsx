import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {

const { name, author, website, authorImage } = recipedata //// Deconstruring?

  const recipeAuthor = () => <div key={name}>{author}</div>;

  const recipeAuthorImage = () => {
    return (
      <div key={name}>
        <img src={authorImage} alt={author} className="authorImage" />
      </div>
    )
  }

  const recipeWebsite = () => <a key={name} href={website}>View Recipe on Website</a>;

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
