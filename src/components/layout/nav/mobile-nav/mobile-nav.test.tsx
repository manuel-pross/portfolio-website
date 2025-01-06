import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import MobileNav from ".";
import { testLinks } from "../../../../tests/data/links";

describe("MobileNav component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("Renders provided amount of links", () => {
    render(<MobileNav links={testLinks} />);

    const navBarLinks = screen.getAllByTestId("navbar-link");

    expect(navBarLinks).toHaveLength(3);
  });

  it("Renders provided links with correct content", () => {
    render(<MobileNav links={testLinks} />);

    const navBarLinks = screen.getAllByTestId("navbar-link");

    expect(navBarLinks[0]).toHaveTextContent("link1");
    expect(navBarLinks[0]).toHaveAttribute("href", "linkRef1");
    expect(navBarLinks[1]).toHaveTextContent("link2");
    expect(navBarLinks[1]).toHaveAttribute("href", "linkRef2");
  });

  it("Renders the fries btn with click functionality", async () => {
    render(<MobileNav links={testLinks} />);

    const friesBtn = screen.getByTestId("mobile-nav-fries");

    await userEvent.click(friesBtn);
  });
});
