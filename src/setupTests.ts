import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
