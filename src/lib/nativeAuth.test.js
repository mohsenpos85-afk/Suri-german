import { describe, expect, it, vi } from "vitest";

vi.mock("@capacitor/core", () => ({ Capacitor: { isNativePlatform: () => false } }));
vi.mock("@capacitor/browser", () => ({ Browser: { close: vi.fn(), open: vi.fn() } }));
vi.mock("./supabase.js", () => ({ supabase: { auth: {} } }));

const { parseAuthCallback } = await import("./nativeAuth.js");

describe("native auth callback parser", () => {
  it("accepts an authorization code callback", () => {
    expect(parseAuthCallback("com.surigerman.app://auth/callback?code=abc")).toEqual({ code: "abc" });
  });
  it("accepts an implicit token callback", () => {
    expect(parseAuthCallback("com.surigerman.app://auth/callback#access_token=a&refresh_token=r")).toEqual({ accessToken: "a", refreshToken: "r" });
  });
  it("returns provider errors", () => {
    expect(parseAuthCallback("com.surigerman.app://auth/callback?error_description=Denied")).toEqual({ error: "Denied" });
  });
  it("ignores unrelated deep links", () => {
    expect(parseAuthCallback("another.app://auth/callback?code=abc")).toBeNull();
  });
});
