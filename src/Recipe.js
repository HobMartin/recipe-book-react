import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, link }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <a href={link}><img className={style.image} src={image} alt="" /></a>
    </div>
  );
};

export default Recipe;
