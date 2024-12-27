import { describe, expect, it } from "vitest";
import DesktopNav from ".";
import { render, screen } from "@testing-library/react";
import { testLinks } from "../../../../tests/data/links";

describe("DesktopNav component", () => {
  it("Renders provided amount of links", () => {
    render(<DesktopNav links={testLinks} />);

    const navBarLinks = screen.getAllByTestId("navbar-link");

    expect(navBarLinks).toHaveLength(3);
  });

  it("Renders provided links with correct content", () => {
    render(<DesktopNav links={testLinks} />);

    const navBarLinks = screen.getAllByTestId("navbar-link");

    expect(navBarLinks[0]).toHaveTextContent("link1");
    expect(navBarLinks[0]).toHaveAttribute("href", "linkRef1");
    expect(navBarLinks[2]).toHaveTextContent("link3");
    expect(navBarLinks[2]).toHaveAttribute("href", "linkRef3");
  });
});
