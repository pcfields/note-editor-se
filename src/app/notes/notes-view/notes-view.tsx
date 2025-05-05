import { NoteList } from "../note-list/note-list";
import type { ApiNote } from "../note.types";
import { useEffect, useState } from "react";
import { NotesApi } from "../api/notes-api";
import { SESSION_ID } from "../../app-routes";

type Status = "notes-idle" | "notes-loading" | "notes-error" | "notes-loaded";

export function NotesView() {
  const [notes, setNotes] = useState<ApiNote[]>([]);
  const [status, setStatus] = useState<Status>("notes-loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notesData = await NotesApi.getNotes(SESSION_ID);

        setNotes(notesData);
        setStatus("notes-loaded");
      } catch (error) {
        console.error("Error fetching notes:", error);

        setError("Could not fetch notes");
        setStatus("notes-error");
      }
    };

    fetchNotes();
  }, []);

  if (status === "notes-loading") {
    return (
      <div>
        <h1>Notes</h1>

        <p>Loading...</p>
      </div>
    );
  }

  if (status === "notes-error") {
    return (
      <div>
        <h1>Notes</h1>

        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Notes</h1>

      <NoteList notes={notes} />
    </div>
  );
}
