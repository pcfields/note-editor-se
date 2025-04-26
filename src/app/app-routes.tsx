import { Route, Routes } from "react-router";
import { NotesView } from "../notes/notes-view/notes-view";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NotesView />} />
    </Routes>
  );
}
