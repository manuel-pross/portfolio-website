import { describe, it, expect } from "vitest";
import Header from ".";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  it("renders the header component with correct content", () => {
    render(<Header />);

    const heading = screen.getByText("Manuel", { selector: "h1" });
    const span = screen.getByText(".", { selector: "span" });

    expect(heading).toBeInTheDocument;
    expect(span).toBeInTheDocument;
  });
});
