import type { ApiNote } from "../note.types";

type NoteEditorProps = { note: ApiNote };

export function NoteEditor({ note }: NoteEditorProps) {
  const { body } = note;
  const noteLines = body.split("\n");
  const [title, ...contentLines] = noteLines;

  return (
    <div contentEditable="true" data-testid="note-editor">
      <h1 className="note-title">{title}</h1>

      <div className="note-content">
        {contentLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
