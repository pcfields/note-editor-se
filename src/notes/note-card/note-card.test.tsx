import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { NoteCard } from "./note-card";

describe("NoteCard", () => {
  test("should display title", () => {
    render(<NoteCard note={{ id: 1, body: "Note 1 \n description" }} />);

    const noteTitle = screen.getByText("Note 1");

    expect(noteTitle).toBeInTheDocument();
  });
});
