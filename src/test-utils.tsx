import type { ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter, type MemoryRouterProps } from "react-router";

interface RenderWithRouterOptions extends RenderOptions {
  route?: string;
  routerProps?: MemoryRouterProps;
}

export function renderWithRouter(
  ui: ReactNode,
  {
    route = "/",
    routerProps = {},
    ...renderOptions
  }: RenderWithRouterOptions = {},
) {
  return render(
    <MemoryRouter initialEntries={[route]} {...routerProps}>
      {ui}
    </MemoryRouter>,
    renderOptions,
  );
}
