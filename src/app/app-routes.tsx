import { Navigate, Route, Routes } from "react-router";
import { NotesView } from "./notes/notes-view/notes-view";
import { NoteView } from "./notes/note-view/note-view";

export const SESSION_ID = "SESSION"; // TODO: move to a better place, like a context provider or a global state

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/notes" replace />} />
      <Route path="/notes" element={<NotesView />} />
      <Route path="/notes/:id" element={<NoteView />} />
    </Routes>
  );
}
