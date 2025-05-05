import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { NotesView } from "./notes-view";
import { renderWithRouter } from "../../../test-utils";

describe("NotesView", () => {
  test("displays the title", async () => {
    renderWithRouter(<NotesView />);

    const title = await screen.findByRole("heading", { name: /notes/i });

    expect(title).toBeInTheDocument();
  });

  test("displays the list of notes", async () => {
    renderWithRouter(<NotesView />);

    const notesList = await screen.findByTestId("note-list-container");

    expect(notesList).toBeInTheDocument();
  });
});
