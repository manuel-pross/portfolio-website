import { describe, it, expect } from "vitest";
import Header from ".";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  it("renders the header component with correct content", () => {
    render(<Header />);

    const header = screen.getByText("Manuel");

    expect(header).toBeInTheDocument();
  });
});
