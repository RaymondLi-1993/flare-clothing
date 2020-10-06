import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import History from "../history";

import Landing from "./landing";
import Contact from "./contact";
import Menu from "./menu";
import Header from "./header";
import categories from "./categories";
import Cart from "./cart";
import Login from "./login";
import Shipping from "./shipping";
import Order from "./order";

const stripePromise = loadStripe(`	
pk_test_51HNYGwFQiplwqa4K80yFUkEga74jEkxE5CwcNUghhjdbs4ObVnmUxIYI1XToVnJQTcHuqVUwykYf3SiVDuM2orll00w0KGHJXt`);

function App() {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <Router history={History}>
        <div>
          <Header />
          <Switch>
            <Elements stripe={stripePromise}>
              <Route path="/" exact component={Landing} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/category/:routeName" exact component={categories} />
              <Route path="/login" exact component={Login} />
              <Route path="/shipping" exact component={Shipping} />
              <Route path="/order" exact component={Order} />
            </Elements>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
