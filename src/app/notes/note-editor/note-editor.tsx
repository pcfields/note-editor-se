import { useEffect, useRef, useState } from "react";
import type { ApiNote } from "../note.types";
import "./note-editor.css";

type NoteEditorProps = { note: ApiNote };
// type NoteStatus = "idle" | "editing"| "saving" | "loading" | "error" | "success";

export function NoteEditor({ note: savedNote }: NoteEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState(savedNote.body);

  const handleContentChange = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;

      setContent(newContent);
    }
  };

  useEffect(() => {
    const initializeNoteEditor = () => {
      if (editorRef.current) {
        editorRef.current.innerHTML = content;
      }
    };

    initializeNoteEditor();
  }, []);

  return (
    <div data-testid="note-editor-container" className="note-editor-container">
      <div className="note-editor-notification">[...]</div>

      <div
        ref={editorRef}
        data-testid="note-editor"
        className="note-editor"
        contentEditable="true"
        onInput={handleContentChange}
        aria-label="Note content"
        aria-multiline="true"
      />
    </div>
  );
}
