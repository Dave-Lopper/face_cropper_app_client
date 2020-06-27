import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn title element", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Face cropping app/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders learn paragraphs", () => {
  const { getByText } = render(<App />);
  const pElement = getByText(/Welcome to the face cropping app !/i);
  expect(pElement).toBeInTheDocument();

  const pElement2 = getByText(
    /We will detect faces on your image, crop it and let you download it !/i
  );
  expect(pElement2).toBeInTheDocument();
});

test("renders input", () => {
  const { getByText } = render(<App />);
  const inputLabel = getByText(/Drop your image here !/i);
  expect(inputLabel).toBeInTheDocument();
});
