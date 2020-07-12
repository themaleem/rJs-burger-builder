import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
  let Ings = Object.keys(props.ingredients)
    .map((item) => {
      return [...Array(props.ingredients[item])].map((_, i) => {
        return <BurgerIngredient key={item + i} type={item} />;
        // console.log(i)
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    if (Ings.length === 0) {
        Ings = <p>Please start adding ingredients!</p>;
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {Ings}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
