import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { renderWithRouter } from "../../../test-utils";
import { NoteView } from "./note-view";

describe("NoteView", () => {
  test("should display toolbar and note editor", async () => {
    renderWithRouter(<NoteView />, { route: "/notes/1" });

    const toolbar = await screen.findByTestId("note-editor-toolbar");
    const noteEditor = screen.getByTestId("note-editor");

    expect(toolbar).toBeInTheDocument();
    expect(noteEditor).toBeInTheDocument();
  });

  test("should display invalid note id message", async () => {
    renderWithRouter(<NoteView />, { route: "/notes" });

    const invalidNoteMessage = await screen.findByTestId(
      "invalid-note-message",
    );

    expect(invalidNoteMessage).toBeInTheDocument();
  });

  test.todo("should get the note from the api");
  test.todo("displays the error message");
  test.todo("displays the loading screen");
});
