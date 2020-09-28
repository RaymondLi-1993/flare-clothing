import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import History from "../history";

import Landing from "./landing";
import Contact from "./contact";
import Menu from "./menu";
import Header from "./header";
import categories from "./categories";
import Cart from "./cart";

function App() {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <Router history={History}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/category/:routeName" exact component={categories} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
