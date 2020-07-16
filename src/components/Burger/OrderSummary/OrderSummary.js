import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const order = props.ingredients;
  const ingredientSummary = Object.keys(order).map((item) => (
    <li key={item}>
      <span style={{ textTransform: "capitalize" }}>{item}</span>: {order[item]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order </h3>
      <p>With all the following ingredients</p>
      {ingredientSummary}
      <p>Total price: ₦{props.price}</p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default OrderSummary;
