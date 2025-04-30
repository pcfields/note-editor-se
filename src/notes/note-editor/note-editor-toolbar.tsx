import { Link } from "react-router";
import { VisuallyHidden } from "../../shared/visually-hidden";
import "./note-editor-toolbar.css";

export function NoteEditorToolbar() {
  return (
    <div className="note-editor-toolbar" data-testid="note-editor-toolbar">
      <div>
        <EditorButton label="Folder">F</EditorButton>
        <EditorButton label="Bold">B</EditorButton>
        <EditorButton label="Justify">J</EditorButton>
        <EditorButton label="Underline">U</EditorButton>
      </div>
      <CloseNoteLink />
    </div>
  );
}

type EditorButtonProps = {
  children: React.ReactNode;
  label: string;
};

function EditorButton({ children, label }: EditorButtonProps) {
  return (
    <button className="editor-icon-button" type="button">
      {children}
      <VisuallyHidden>{label}</VisuallyHidden>
    </button>
  );
}

function CloseNoteLink() {
  return (
    <Link className="editor-icon-button" to="/">
      X<VisuallyHidden>Close Note</VisuallyHidden>
    </Link>
  );
}
