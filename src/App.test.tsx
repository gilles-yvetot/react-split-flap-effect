import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { FlapDisplay } from "./components";

test("renders modern split-flap display heading", () => {
  render(<App />);
  const heading = screen.getByText(/Modern Split-Flap Display/i);
  expect(heading).toBeInTheDocument();
});

test("renders FlapDisplay component", () => {
  render(<FlapDisplay value="123" />);
  // Component should render without crashing
  expect(screen.getByLabelText("123")).toBeInTheDocument();
});

test("FlapDisplay accepts different display modes", () => {
  const { rerender } = render(
    <FlapDisplay value="ABC" chars=" ABCDEFGHIJKLMNOPQRSTUVWXYZ" />
  );
  expect(screen.getByLabelText("ABC")).toBeInTheDocument();

  rerender(<FlapDisplay value="Hello" words={["", "Hello", "World"]} />);
  expect(screen.getByLabelText("Hello")).toBeInTheDocument();
});
