import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";
describe("App - Counter tests", () => {
  test("Counter default is 0", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const counterBtn = screen.getByRole("button", { name: "count is: 0" });
    expect(counterBtn).toBeInTheDocument();
  });
  test("Increments counter when clicked", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const counterBtn = screen.getByRole("button", { name: "count is: 0" });
    userEvent.click(counterBtn);
    expect(
      screen.queryByRole("button", { name: "count is: 0" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "count is: 1" })
    ).toBeInTheDocument();
  });
});
describe("Router tests", () => {
  test("About page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const aboutLink = screen.getByRole("link", { name: "About page" });
    expect(aboutLink).toBeInTheDocument();
    expect(screen.queryByText("Hello React Router")).not.toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(screen.getByText("Hello React Router")).toBeInTheDocument();
  });
});
