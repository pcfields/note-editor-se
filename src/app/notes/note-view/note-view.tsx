import { useParams } from "react-router";
import { NoteEditor } from "../note-editor/note-editor";
import { NoteEditorToolbar } from "../note-editor/note-editor-toolbar";
import "./note-view.css";

export function NoteView() {
  const { id } = useParams<{ id?: string }>();

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
      <NoteEditor />
    </div>
  );
}
