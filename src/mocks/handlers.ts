import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://challenge.surfe.com/:sessionId/notes", () => {
    return HttpResponse.json([]);
  }),
  http.get("https://challenge.surfe.com/:sessionId/notes/:noteId", () => {
    return HttpResponse.json({ id: "1", body: "<p>Note content</p>" });
  }),
];
