import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { renderWithRouter } from "../../../test-utils";
import { NoteView } from "./note-view";

describe("NoteView", () => {
  test("should display toolbar and note editor", () => {
    renderWithRouter(<NoteView />);

    const toolbar = screen.getByTestId("note-editor-toolbar");
    const noteEditor = screen.getByTestId("note-editor");

    expect(toolbar).toBeInTheDocument();
    expect(noteEditor).toBeInTheDocument();
  });
});
