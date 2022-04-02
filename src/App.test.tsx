import { render, screen } from "@testing-library/react";
import TDDCounter from "./TDDCounter";

test("renders learn react link", () => {
  render(<TDDCounter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
