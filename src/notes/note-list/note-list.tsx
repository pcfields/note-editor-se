import type { ApiNote } from "../note.types";

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
      <ul data-testid="note-list">
        {notes.map((note) => (
          <li key={note.id} data-testid={`note-list-item-${note.id}`}>
            {note.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
