import { NoteEditor } from "../note-editor/note-editor";
import { NoteEditorToolbar } from "../note-editor/note-editor-toolbar";
import "./note-view.css";

export function NoteView() {
  return (
    <div className="note-view-container" data-testid="note-view-container">
      <NoteEditorToolbar />
      <NoteEditor />
    </div>
  );
}
