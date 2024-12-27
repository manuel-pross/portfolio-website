import { beforeEach, describe, expect, it } from "vitest";
import Nav from ".";
import { render, screen } from "@testing-library/react";

describe("Nav component", () => {
  beforeEach(() => {
    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
  });

  it("Renders the Nav component with both navigations (desktop and mobile)", () => {
    render(<Nav />);

    const desktopNav = screen.getByTestId("desktop-nav");
    const mobileNav = screen.getByTestId("mobile-nav");

    expect(desktopNav).toBeInTheDocument();
    expect(mobileNav).toBeInTheDocument();
  });
});
