import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { renderWithRouter } from "../../../test-utils";
import { NoteEditor } from "./note-editor";

describe("NoteEditor", () => {
  test("should display title and note contents", () => {
    renderWithRouter(
      <NoteEditor note={{ id: 1, body: "title a\n line one\n line two\n" }} />,
      { route: "/notes/1" },
    );

    const noteTitle = screen.getByRole("heading", { name: "title a" });
    expect(noteTitle).toBeInTheDocument();

    const contentParagraph1 = screen.getByText("line one");
    const contentParagraph2 = screen.getByText("line two");

    expect(contentParagraph1).toBeInTheDocument();
    expect(contentParagraph2).toBeInTheDocument();
  });
});
