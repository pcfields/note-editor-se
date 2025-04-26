import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { NotesView } from "./notes-view";

describe("NotesView", () => {
  test("displays the title", () => {
    render(<NotesView />);

    const title = screen.getByRole("heading", { name: /notes/i });

    expect(title).toBeInTheDocument();
  });

  test("displays the list of notes", () => {
    render(<NotesView />);

    const notesList = screen.getByTestId("note-list");

    expect(notesList).toBeInTheDocument();
  });
});
