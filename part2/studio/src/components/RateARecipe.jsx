let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating(props) {
  return <h3>{stars[props.rating - 1]}</h3>;
}

function RateARecipe(props) {
  const userRate = props.rating;
  if (userRate < 0 || userRate > 5) {
    null;
  }
  return <GiveRating rating={props.rating} />;

}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
