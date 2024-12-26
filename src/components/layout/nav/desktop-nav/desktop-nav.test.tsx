import { describe, expect, it } from "vitest";
import DesktopNav from ".";
import { render, screen } from "@testing-library/react";
import { testLinks } from "../../../../tests/data/links";

describe("DesktopNav component", () => {
  it("Renders the DesktopNav component", () => {
    render(<DesktopNav links={testLinks} />);

    const content = screen.getByText("DesktopNav", { selector: "div" });

    expect(content).toBeInTheDocument();
  });
});
