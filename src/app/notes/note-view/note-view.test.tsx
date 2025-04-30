import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { renderWithRouter } from "../../../test-utils";
import { NoteView } from "./note-view";

describe("NoteView", () => {
  test("should display toolbar and note editor", () => {
    renderWithRouter(<NoteView />, { route: "/notes/1" });

    const toolbar = screen.getByTestId("note-editor-toolbar");
    const noteEditor = screen.getByTestId("note-editor");

    expect(toolbar).toBeInTheDocument();
    expect(noteEditor).toBeInTheDocument();
  });

  test("should display invalid note id message", () => {
    renderWithRouter(<NoteView />, { route: "/notes" });

    const invalidNoteMessage = screen.getByTestId("invalid-note-message");

    expect(invalidNoteMessage).toBeInTheDocument();
  });

  test.todo("should call note api endpoint", () => {
    renderWithRouter(<NoteView />, { route: "/notes/1" });
  });
});
