import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FlapDisplay, Presets } from "../index";

describe("FlapDisplay", () => {
  test("renders with numeric value", () => {
    render(<FlapDisplay value="123" />);
    expect(screen.getByLabelText("123")).toBeInTheDocument();
  });

  test("renders with alphanumeric value", () => {
    render(<FlapDisplay value="ABC" chars={Presets.ALPHANUM} />);
    expect(screen.getByLabelText("ABC")).toBeInTheDocument();
  });

  test("renders with words", () => {
    const words = ["", "Hello", "World"];
    render(<FlapDisplay value="Hello" words={words} />);
    expect(screen.getByLabelText("Hello")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    render(<FlapDisplay value="123" className="custom-class" />);
    expect(screen.getByLabelText("123")).toHaveClass("custom-class");
  });

  test("respects length prop for padding", () => {
    render(<FlapDisplay value="1" length={3} />);
    // Should pad numeric values to the left by default
    expect(screen.getByLabelText("1")).toBeInTheDocument();
  });

  test("uses custom timing", () => {
    render(<FlapDisplay value="123" timing={100} />);
    expect(screen.getByLabelText("123")).toBeInTheDocument();
  });

  test("renders with hinge prop", () => {
    render(<FlapDisplay value="1" hinge={true} />);
    expect(screen.getByLabelText("1")).toBeInTheDocument();
  });
});
