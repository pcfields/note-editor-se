import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { NotesView } from "./notes-view";
import { renderWithRouter } from "../../../test-utils";

describe("NotesView", () => {
  test("displays the loading screen", async () => {
    renderWithRouter(<NotesView />);

    const loadingText = screen.getByText("Loading...");

    expect(loadingText).toBeInTheDocument();
  });

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

  test.todo("displays the error message");
});
