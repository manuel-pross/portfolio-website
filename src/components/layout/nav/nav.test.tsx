import { describe, expect, it } from "vitest";
import Nav from ".";
import { render, screen } from "@testing-library/react";

describe("Nav component", () => {
  it("Renders the Nav component with correct content", () => {
    render(<Nav />);

    const desktopNav = screen.getByText("DesktopNav", { selector: "div" });
    const mobileNav = screen.getByText("MobileNav", { selector: "div" });

    expect(desktopNav).toBeInTheDocument();
    expect(mobileNav).toBeInTheDocument();
  });
});
