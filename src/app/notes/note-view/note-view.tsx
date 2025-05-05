import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NoteEditor } from "../note-editor/note-editor";
import { NoteEditorToolbar } from "../note-editor/note-editor-toolbar";
import type { ApiNote } from "../note.types";
import { NotesApi } from "../api/notes-api";
import "./note-view.css";

type Status = "note-idle" | "note-loading" | "note-error" | "note-loaded";

export function NoteView() {
  const { id } = useParams<{ id?: string }>();

  const sessionId = "SESSION";
  const [note, setNote] = useState<ApiNote | null>(null);
  const [status, setStatus] = useState<Status>("note-idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchNote = async () => {
      setStatus("note-loading");
      setError(null);

      try {
        const note = await NotesApi.getNote(sessionId, id);

        setNote(note);
        setStatus("note-loaded");
      } catch (error) {
        console.error("Error fetching note:", error);

        setError("Could not fetch note");
        setStatus("note-error");
      }
    };

    fetchNote();
  }, [id]);

  const onSave = async (note: ApiNote) => {
    NotesApi.saveNote(sessionId, note)
      .then(() => {
        setNote(note);
        setError(null);
      })
      .catch((error) => {
        console.error("Error saving note:", error);
        setError("Could not save note");
      });
  };

  if (!id) {
    return (
      <div className="note-view-container" data-testid="note-view-container">
        <p data-testid="invalid-note-message">We could not find this note</p>
      </div>
    );
  }

  if (status === "note-loading") {
    return (
      <div className="note-view-container" data-testid="note-view-container">
        <p data-testid="loading-note-message">Loading note...</p>
      </div>
    );
  }

  if (status === "note-error") {
    return (
      <div className="note-view-container" data-testid="note-view-container">
        <p data-testid="error-message">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="note-view-container" data-testid="note-view-container">
      <NoteEditorToolbar />
      {note && <NoteEditor note={note} onSave={onSave} />}
    </div>
  );
}
