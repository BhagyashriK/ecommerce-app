import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

import App from "./App";
import ErrorBoundary from "./views/components/error-boundary/erro-boundary.index";

import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";

const store = configureStore();

/***
 * theme: common theme
 * store: redux store
 * ErrorBoundary: handled dom curruption issues
 */

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
