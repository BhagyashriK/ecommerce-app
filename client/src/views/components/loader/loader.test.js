import React from "react";
import Loader from "./loader.index";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Loader", () => {
  it("renders loader without crashing", async () => {
    const { getByText } = render(<Loader />);
    await waitForElement(() => getByText("Loading..."));
  });
});
