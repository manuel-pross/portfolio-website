import { describe, expect, it } from "vitest";
import Nav from ".";
import { render, screen } from "@testing-library/react";

describe("Nav component", () => {
  it("Renders the nav component with correct content", () => {
    render(<Nav />);

    const content = screen.getByText("Nav", { selector: "div" });

    expect(content).toBeInTheDocument();
  });
});
