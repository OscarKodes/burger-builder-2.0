import React from 'react';
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {

    let customIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
    if (customIngredients.length === 0) {
        customIngredients = <p>You may add ingredients.</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {customIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;