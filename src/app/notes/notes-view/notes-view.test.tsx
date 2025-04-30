import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { NotesView } from "./notes-view";
import { renderWithRouter } from "../../../test-utils";

describe("NotesView", () => {
  test("displays the title", () => {
    renderWithRouter(<NotesView />);

    const title = screen.getByRole("heading", { name: /notes/i });

    expect(title).toBeInTheDocument();
  });

  test("displays the list of notes", () => {
    renderWithRouter(<NotesView />);

    const notesList = screen.getByTestId("note-list-container");

    expect(notesList).toBeInTheDocument();
  });
});
