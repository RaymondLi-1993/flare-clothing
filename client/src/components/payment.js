import React from "react";
import StripeCheckOut from "react-stripe-checkout";
import { handleToken } from "../actions/index";
import { useDispatch } from "react-redux";

const Payments = () => {
  const dispatch = useDispatch();
  return (
    <StripeCheckOut
      name="Flare Clothing"
      description="add credits using test credit card"
      amount={50000}
      token={token => dispatch(handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />
  );
};

export default Payments;
