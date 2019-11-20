import { object } from "prop-types";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import getMockedState from "../../../mocks/state-mock";
import thunk from "../../../mocks/thunk-mock";

import ProductList from "./product-list.index";
import { productsReducer } from "./product-list.reducer";

afterEach(cleanup);

const mockedState = getMockedState();

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(productsReducer, initialState, applyMiddleware(thunk)),
    history = createMemoryHistory({ initialEntries: ["/"] })
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    store
  };
}

test("Should render product list", () => {
  const { getByTestId } = renderWithRedux(<ProductList />, {
    initialState: mockedState
  });
  const productList = getByTestId("product-list");
  expect(productList.children.length).toBe(5);
});

test("Should show 'No Content' message if product list is empty", () => {
  mockedState.products.list = [];

  const { getByText, getByTestId } = renderWithRedux(<ProductList />, {
    initialState: mockedState
  });
  const productListWrapper = getByTestId("product-list-wrapper");
  const emptyMsg = getByText("No Content");
  expect(productListWrapper).toContainElement(emptyMsg);
});

test("Should show Loader if is request is in progress", () => {
  mockedState.products.isLoading = true;
  const { getByText, getByTestId } = renderWithRedux(<ProductList />, {
    initialState: mockedState
  });
  const productListWrapper = getByTestId("product-list-wrapper");
  const loader = getByText("Loading...");
  expect(productListWrapper).toContainElement(loader);
});
