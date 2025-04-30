import { Route, Routes } from "react-router";
import { NotesView } from "./notes/notes-view/notes-view";
import { NoteView } from "./notes/note-view/note-view";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NotesView />} />
      <Route path="/notes/:id" element={<NoteView />} />
    </Routes>
  );
}
