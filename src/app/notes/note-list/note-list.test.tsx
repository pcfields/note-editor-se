import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { NoteList } from "./note-list";
import { renderWithRouter } from "../../../test-utils";

describe("Notelist", () => {
  test("should display correct number of notes", () => {
    const notes = [
      { id: 1, body: "Note 1" },
      { id: 2, body: "Note 2" },
    ];

    renderWithRouter(<NoteList notes={notes} />);

    const listItems = screen.queryAllByRole("listitem");

    expect(listItems.length).toEqual(2);
  });

  test("should display no saved notes message", () => {
    renderWithRouter(<NoteList notes={[]} />);

    const noSavedNotesMessage = screen.getByTestId("no-saved-notes-message");

    expect(noSavedNotesMessage).toBeInTheDocument();
  });
});
