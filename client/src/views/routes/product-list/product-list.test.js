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

import PatientList from "./product-list.index";
import { patientsReducer } from "./product-list.reducer";

afterEach(cleanup);

const mockedState = getMockedState();

interface Store {
  initialState?: object;
  store?: any;
  history?: any;
}

function renderWithRedux(
  ui: any,
  {
    initialState,
    store = createStore(patientsReducer, initialState, applyMiddleware(thunk)),
    history = createMemoryHistory({ initialEntries: ["/"] })
  }: Store = {}
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

test("Should render patient list", () => {
  const { getByTestId } = renderWithRedux(<PatientList />, {
    initialState: mockedState
  });
  const patientList = getByTestId("patient-list");
  expect(patientList.children.length).toBe(3);
});

test("Should show 'No Content' message if patient list is empty", () => {
  mockedState.patients.list = [];

  const { getByText, getByTestId } = renderWithRedux(<PatientList />, {
    initialState: mockedState
  });
  const patientListWrapper = getByTestId("patient-list-wrapper");
  const emptyMsg = getByText("No Content");
  expect(patientListWrapper).toContainElement(emptyMsg);
});

test("Should show Loader if is request is in progress", () => {
  mockedState.patients.isLoading = true;
  const { getByText, getByTestId } = renderWithRedux(<PatientList />, {
    initialState: mockedState
  });
  const patientListWrapper = getByTestId("patient-list-wrapper");
  const loader = getByText("Loading...");
  expect(patientListWrapper).toContainElement(loader);
});
