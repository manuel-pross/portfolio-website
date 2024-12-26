import { describe, expect, it } from "vitest";
import DesktopNav from ".";
import { render, screen } from "@testing-library/react";

describe("DesktopNav component", () => {
  it("Renders the DesktopNav component with correct content", () => {
    render(<DesktopNav />);

    const content = screen.getByText("DesktopNav", { selector: "div" });

    expect(content).toBeInTheDocument();
  });
});
