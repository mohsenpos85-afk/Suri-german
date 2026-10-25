import { beforeEach, describe, expect, it, vi } from "vitest";

const { getSession } = vi.hoisted(() => ({ getSession: vi.fn() }));
vi.mock("./supabase.js", () => ({
  supabase: { auth: { getSession } },
}));

const { AiRequestError, callClaude } = await import("./claude.js");

describe("Claude client", () => {
  beforeEach(() => {
    getSession.mockReset();
    vi.restoreAllMocks();
  });

  it("requires an authenticated session", async () => {
    getSession.mockResolvedValue({ data: { session: null } });
    await expect(callClaude({})).rejects.toMatchObject({ code: "NOT_SIGNED_IN", status: 401 });
  });

  it("maps provider rate limits to a stable app error", async () => {
    getSession.mockResolvedValue({ data: { session: { access_token: "token" } } });
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ error: "busy" }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    })));
    await expect(callClaude({ model: "test" })).rejects.toMatchObject({ code: "RATE_LIMITED", status: 429 });
  });

  it("returns successful JSON responses", async () => {
    getSession.mockResolvedValue({ data: { session: { access_token: "token" } } });
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ content: [{ text: "ok" }] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })));
    await expect(callClaude({ model: "test" })).resolves.toEqual({ content: [{ text: "ok" }] });
  });

  it("exposes typed request errors", () => {
    expect(new AiRequestError("NETWORK_ERROR", 0)).toMatchObject({ name: "AiRequestError", code: "NETWORK_ERROR" });
  });
});
