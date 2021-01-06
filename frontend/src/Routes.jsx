import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

export default (props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Products} />
      <Route path="/produtos" exact={true} component={Products} />
      <Route path="/produto/:id" exact={true} component={ProductDetail} />
    </Switch>
  </BrowserRouter>
);
