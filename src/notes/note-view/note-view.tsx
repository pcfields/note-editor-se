import { VisuallyHidden } from "../../shared/visually-hidden";

export function NoteView() {
  return (
    <div data-testid="note-view-container">
      <Toolbar />
      <NoteEditor />
    </div>
  );
}

function Toolbar() {
  return (
    <div data-testid="note-editor-toolbar">
      <button type="button">
        F<VisuallyHidden>Folder</VisuallyHidden>
      </button>
      <button type="button">
        B<VisuallyHidden>Bold</VisuallyHidden>
      </button>
      <button type="button">
        J<VisuallyHidden>Justify</VisuallyHidden>
      </button>
      <button type="button">
        U<VisuallyHidden>Underline</VisuallyHidden>
      </button>
      <button type="button">
        X<VisuallyHidden>Close Note</VisuallyHidden>
      </button>
    </div>
  );
}

function NoteEditor() {
  return <div data-testid="note-editor"></div>;
}
