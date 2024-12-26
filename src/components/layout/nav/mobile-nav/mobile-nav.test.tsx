import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MobileNav from ".";

describe("MobileNav component", () => {
  it("Renders the MobileNav component with correct content", () => {
    render(<MobileNav />);

    const content = screen.getByText("MobileNav", { selector: "div" });

    expect(content).toBeInTheDocument();
  });
});
