import type { ApiNote } from "../note.types";
import { apiRequest } from "./api-request";

export const NotesApi = {
  getNotes: async (sessionId: string): Promise<ApiNote[]> => {
    return apiRequest<ApiNote[]>(`${sessionId}/notes`, {
      method: "GET",
    });
  },

  getNote: async (sessionId: string, noteId: string): Promise<ApiNote> => {
    return apiRequest<ApiNote>(`${sessionId}/notes/${noteId}`, {
      method: "GET",
    });
  },

  saveNote: async (sessionId: string, note: ApiNote): Promise<void> => {
    return apiRequest<void>(`${sessionId}/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
    });
  },
};
