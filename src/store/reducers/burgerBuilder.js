import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 25,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 35,
  cheese: 24,
  meat: 13,
  bacon: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.ADD_INGREDIENT:
      const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
      const updatedIngredients = updateObject(state.ingredients,updatedIngredient);
      const updatedState = {ingredients: updatedIngredients,totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]};
      return updateObject(state, updatedState);
    
      case actionTypes.REMOVE_INGREDIENT:
        const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1,};
        const updatedIngs = updateObject(state.ingredients,updatedIng);
        const updatedSt = {ingredients: updatedIngs,totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]};
        return updateObject(state, updatedSt);

    case actionTypes.INIT_INGREDIENTS:
      const updatedState2={
        ingredients: action.ingredients,
        totalPrice: 25,
        error: false
      }
      return updateObject(state,updatedState2)

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state,{error:true})

    default:
      return state;
  }
};

export default reducer;
