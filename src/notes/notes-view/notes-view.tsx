import { NoteList } from "../note-list/note-list";
import type { ApiNote } from "../note.types";

export function NotesView() {
  const notes: ApiNote[] = [];

  return (
    <div>
      <h1>Notes</h1>

      <NoteList notes={notes} />
    </div>
  );
}
