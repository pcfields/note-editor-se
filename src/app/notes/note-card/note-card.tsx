import { Link } from "react-router";
import type { ApiNote } from "../note.types";
import "./note-card.css";

type NoteCardProps = {
  note: ApiNote;
};

export function NoteCard({ note }: NoteCardProps) {
  const { id, body } = note;

  const title = body.split("\n")[0].trim();
  const noteUrl = `/notes/${id}`;

  return (
    <div className="note-card" data-testid={`note-card-${id}`}>
      <Link to={noteUrl} className="note-card-link">
        <h2>{title}</h2>
      </Link>
    </div>
  );
}
