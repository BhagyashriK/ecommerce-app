import React from "react";
import { Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/normalize";
import Message from "./views/components/message/message.index";

import ProductList from "./views/routes/product-list/product-list.index";

const App = props => {
  return (
    <>
      {/* Normalizes the browser default css */}
      <GlobalStyles></GlobalStyles>
      {/* Configure routes for application     */}
      <Switch>
        <Route exact path="/products" component={ProductList} />
        {/* If route is not matching render 404 page */}
        <Route
          render={() => (
            <div className="container">
              <Message message="Page Not found"></Message>
            </div>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
