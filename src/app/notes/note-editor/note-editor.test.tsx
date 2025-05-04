import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, test, vi } from "vitest";
import { renderWithRouter } from "../../../test-utils";
import { NoteEditor } from "./note-editor";

describe("NoteEditor", () => {
  test("should display note contents", () => {
    const savedNote = "title a\n line one\n line two\n";

    renderWithRouter(
      <NoteEditor onSave={vi.fn()} note={{ id: 1, body: savedNote }} />,
      {
        route: "/notes/1",
      },
    );

    const normalizedNoteContent = savedNote.replace(/\s+/g, " ").trim();

    expect(screen.getByTestId("note-editor")).toHaveTextContent(
      normalizedNoteContent,
    );
  });

  test("should auto save note when user stops typing", async () => {
    const savedNote = "note text";
    const onSave = vi.fn();
    const user = userEvent.setup();

    renderWithRouter(
      <NoteEditor onSave={onSave} note={{ id: 1, body: savedNote }} />,
      {
        route: "/notes/1",
      },
    );

    const noteEditor = screen.getByTestId("note-editor");

    await user.type(noteEditor, "1234");

    await waitFor(() => {
      expect(noteEditor).toHaveTextContent("1234");
    });

    //NOTE: could use fake timers in tests
    await waitFor(() => {
      expect(onSave).toHaveBeenCalledOnce();
    });
  });
});
