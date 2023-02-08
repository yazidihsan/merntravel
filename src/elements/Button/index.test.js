import { React } from "react";

import Button from "./index";

import { render } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed Button click when disabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should loading when button is clicked", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(
    <Button href="" type="link" isExternal></Button>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> tag", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
