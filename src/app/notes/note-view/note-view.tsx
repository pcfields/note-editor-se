import { useParams } from "react-router";
import { NoteEditor } from "../note-editor/note-editor";
import { NoteEditorToolbar } from "../note-editor/note-editor-toolbar";
import type { ApiNote } from "../note.types";
import "./note-view.css";

export function NoteView() {
  const { id } = useParams<{ id?: string }>();
  const note: ApiNote = { id: 1, body: "title\n description text \n line 2" };

  const apiPrefix = import.meta.env.VITE_API_PREFIX;
  const sessionId = "aaa-111"; // "SESSION";
  const apiNoteUrl = `${apiPrefix}/${sessionId}/notes/${id}`;

  const onSave = async (note: ApiNote) => {
    try {
      const response = await fetch(apiNoteUrl, {
        method: "PUT",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Could not save note");
      }
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  if (!id) {
    return (
      <div className="note-view-container" data-testid="note-view-container">
        <p data-testid="invalid-note-message">We could not find this note</p>
      </div>
    );
  }

  return (
    <div className="note-view-container" data-testid="note-view-container">
      <NoteEditorToolbar />
      <NoteEditor note={note} onSave={onSave} />
    </div>
  );
}
