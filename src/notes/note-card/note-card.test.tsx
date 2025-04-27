import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { NoteCard } from "./note-card";
import { MemoryRouter } from "react-router";

describe("NoteCard", () => {
  test("should display title", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NoteCard note={{ id: 1, body: "Note 1 \n description" }} />
      </MemoryRouter>,
    );

    const noteTitle = screen.getByText("Note 1");

    expect(noteTitle).toBeInTheDocument();
  });

  test("should have link to view note", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NoteCard note={{ id: 1, body: "Note 1 \n description" }} />
      </MemoryRouter>,
    );

    const noteLink = screen.getByRole("link");

    expect(noteLink).toHaveAttribute("href", "/notes/1");
  });
});
