import React from "react";
import Message from "./message.index";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Loader", () => {
  it("renders message without crashing", async () => {
    const { getByText } = render(<Message message="message text" />);
    await waitForElement(() => getByText("message text"));
  });
  it("renders error message if type is error", async () => {
    const { getByText } = render(
      <Message message="message text" type="error" />
    );
    const element = await waitForElement(() => getByText("message text"));
    expect(element).toHaveAttribute("type", "error");
  });
  it("renders info message if type is info", async () => {
    const { getByText } = render(
      <Message message="message text" type="info" />
    );
    const element = await waitForElement(() => getByText("message text"));
    expect(element).toHaveAttribute("type", "info");
  });
});
