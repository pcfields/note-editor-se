import type { ApiNote } from "../note.types";
import "./note-card.css";

type NoteCardProps = {
  note: ApiNote;
};

export function NoteCard({ note }: NoteCardProps) {
  const { id, body } = note;

  const title = body.split("\n")[0].trim();

  return (
    <div className="note-card" data-testid={`note-card-${id}`}>
      <h2>{title}</h2>
    </div>
  );
}
