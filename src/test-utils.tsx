import type { ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter, Route, type MemoryRouterProps } from "react-router";
import { Routes } from "react-router";

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
      <Routes>
        <Route path="/notes" element={ui} />
        <Route path="/notes/:id" element={ui} />
        <Route path="/" element={ui} />
      </Routes>
    </MemoryRouter>,
    renderOptions,
  );
}
