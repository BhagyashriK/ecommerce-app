import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DeviceTile from "./DeviceTile";
import getDeviceState from "../../../mocks/device-mock";

afterEach(cleanup);

const mockedProps = getDeviceState();

test("Should render device info without crashing", async () => {
  const { getByText, getByTestId } = render(<DeviceTile {...mockedProps} />);
  const componentWrapper = await waitForElement(() =>
    getByTestId("device-wrapper")
  );
  // should render title
  const name = getByText("Samsung Galaxy Grand Prime");
  expect(componentWrapper).toContainElement(name);
  // should render model
  const model = getByText("SM-G530H");
  expect(componentWrapper).toContainElement(model);
  //should render os with version
  const os = getByText("ANDROID 4.4.4");
  expect(componentWrapper).toContainElement(os);
  //should render screen size
  const screen = getByText('5"');
  expect(componentWrapper).toContainElement(screen);
});

test('Should show more info on click of "View More" button', () => {
  const { getByTestId } = render(<DeviceTile {...mockedProps} />);
  const componentWrapper = getByTestId("device-wrapper");
  const toggleBtn = getByTestId("toggle-btn");
  fireEvent.click(toggleBtn);
  const infoLists = componentWrapper.getElementsByClassName("info-list").length;
  expect(infoLists).toBe(2);
  expect(toggleBtn.innerHTML).toBe("View Less");
});

test('Should show less info on click of "View Less" button', () => {
  const { getByTestId } = render(<DeviceTile {...mockedProps} />);
  const componentWrapper = getByTestId("device-wrapper");
  const toggleBtn = getByTestId("toggle-btn");
  fireEvent.click(toggleBtn);
  fireEvent.click(toggleBtn);
  const infoLists = componentWrapper.getElementsByClassName("info-list").length;
  expect(infoLists).toBe(1);
  expect(toggleBtn.innerHTML).toBe("View More");
});
