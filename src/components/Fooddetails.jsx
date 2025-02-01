/* eslint-disable react/prop-types */
import styles from "./fooddetails.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Itemlist from "./Itemlist";

export default function Fooddetails(props) {
  const [isloading, setisLoading] = useState(true);
  const [fooddata, setFoodData] = useState("");
  const URL = `https://api.spoonacular.com/recipes/${props.foodid}/information`;
  const API_KEY = "054824006e03444381f12a4dbe6d930c";
  useEffect(() => {
    async function fetchFoodDetails() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data);
      setisLoading(false);
    }
    fetchFoodDetails();
  }, [props.foodid]);
  return (
    <div className={styles.recipecard}>
      <div>
        <h1 className={styles.recipename}>{fooddata.title}</h1>
        <img className={styles.recipeimg} src={fooddata.image} />
      </div>
      <div className={styles.recipeinfo}>
        <span>
          <strong>⌚ {fooddata.readyInMinutes} Minutes</strong>
        </span>
        <span>
          👨‍👩‍👧‍👦 <strong> Serves {fooddata.servings}</strong>
        </span>
        <span>
          <strong>
            {fooddata.vegetarian ? "🥕 vegetarian" : " 🍖 Non-vegetarian"}
          </strong>
          <strong>{fooddata.vegan ? "🐮 Vegan" : ""}</strong>
        </span>
      </div>
      <div>
        <strong>
          $ <span>{fooddata.pricePerServing}</span> Per Serving
        </strong>
      </div>
      <h2>Ingredients</h2>
      <Itemlist fooddata={fooddata} isloading={isloading} />
      <h2>Instructions</h2>
      <div className={styles.recipeinstructions}>
        <ol>
          {isloading
            ? "Loading"
            : fooddata.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
        </ol>
      </div>
    </div>
  );
}
