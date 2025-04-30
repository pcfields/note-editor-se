import type { ApiNote } from "../note.types";
import { NoteCard } from "../note-card/note-card";
import "./note-list.css";

type NoteListProps = {
  notes: ApiNote[];
};

export function NoteList({ notes }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <div data-testid="note-list-container">
        <p data-testid="no-saved-notes-message">
          You do not have any saved notes
        </p>
      </div>
    );
  }

  return (
    <div data-testid="note-list-container">
      <ul className="note-list" data-testid="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            <NoteCard note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
