import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Product from "./product";
import getProductState from "../../../mocks/product-mock";

afterEach(cleanup);

const mockedProps = getProductState();

test("Should render product info without crashing", async () => {
  const { getByText, getByTestId } = render(<Product {...mockedProps} />);
  const componentWrapper = await waitForElement(() =>
    getByTestId("product-wrapper")
  );
  // should render title
  const name = getByText("Lancôme La vie est belle Eau de Parfum");
  expect(componentWrapper).toContainElement(name);
  // should render price
  const price = getByText("€ 3895");
  expect(componentWrapper).toContainElement(price);
  //should render size
  const size = getByText("30ML");
  expect(componentWrapper).toContainElement(size);
  //should render brand
  const brand = getByText("Lancôme");
  expect(componentWrapper).toContainElement(brand);
  //should render type
  const type = getByText("Eau de Parfum");
  expect(componentWrapper).toContainElement(type);
  //should render rating
  const rating = getByText("4.95 ★");
  expect(componentWrapper).toContainElement(rating);
});
