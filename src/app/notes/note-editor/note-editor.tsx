import { useEffect, useRef, useState } from "react";
import type { ApiNote } from "../note.types";
import "./note-editor.css";

const AUTO_SAVE_MS_DELAY = 1000;

type NoteStatus =
  | "note-idle"
  | "note-editing"
  | "note-saving"
  | "note-error"
  | "note-saved";

type NoteEditorProps = {
  note: ApiNote;
  onSave: (note: ApiNote) => Promise<void>;
};

export function NoteEditor({ note, onSave }: NoteEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  const [noteContent, setNoteContent] = useState(note.body);
  const [status, setStatus] = useState<NoteStatus>("note-idle");
  const saveTimerRef = useRef<number | null>(null);

  const handleContentChange = () => {
    if (editorRef.current) {
      setStatus("note-editing");

      const updatedContent = editorRef.current.innerHTML;

      setNoteContent(updatedContent);
      autoSaveNote(updatedContent);
    }
  };

  const autoSaveNote = (updatedContent: string) => {
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }

    saveTimerRef.current = window.setTimeout(() => {
      saveNote(updatedContent);
    }, AUTO_SAVE_MS_DELAY);
  };

  const saveNote = async (updatedContent: string) => {
    setStatus("note-saving");

    try {
      await onSave({ id: note.id, body: updatedContent });

      setStatus("note-saved");
    } catch (error) {
      setStatus("note-error");
      console.error("Error saving note:", error);
    }
  };

  useEffect(() => {
    const initializeNoteEditor = () => {
      if (editorRef.current) {
        editorRef.current.innerHTML = noteContent;
      }
    };

    initializeNoteEditor();
  }, []);

  const getStatusMessage = () => {
    switch (status) {
      case "note-editing":
        return "Unsaved changes";
      case "note-saving":
        return "Saving note...";
      case "note-error":
        return "Error saving note. Please try again.";
      case "note-saved":
        return "Note saved.";
      default:
        return "";
    }
  };

  return (
    <div data-testid="note-editor-container" className="note-editor-container">
      <div className="note-editor-notification">{getStatusMessage()}</div>

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
