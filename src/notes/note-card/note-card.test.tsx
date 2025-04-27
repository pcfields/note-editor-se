import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { NoteCard } from "./note-card";
import { renderWithRouter } from "../../test-utils";

describe("NoteCard", () => {
  test("should display title", () => {
    renderWithRouter(
      <NoteCard note={{ id: 1, body: "Note 1 \n description" }} />,
    );

    const noteTitle = screen.getByText("Note 1");

    expect(noteTitle).toBeInTheDocument();
  });

  test("should have link to view note", () => {
    renderWithRouter(
      <NoteCard note={{ id: 1, body: "Note 1 \n description" }} />,
    );

    const noteLink = screen.getByRole("link");

    expect(noteLink).toHaveAttribute("href", "/notes/1");
  });
});
