import { beforeEach, describe, expect, it, vi } from "vitest";
import { readJson, readText, removeStoredMany, writeJson, writeText } from "./storage.js";

describe("safe storage helpers", () => {
  beforeEach(() => localStorage.clear());
  it("round-trips text and JSON values", () => {
    expect(writeText("language", "tr")).toBe(true);
    expect(readText("language", "en")).toBe("tr");
    expect(writeJson("progress", { A1: 42 })).toBe(true);
    expect(readJson("progress", {})).toEqual({ A1: 42 });
  });
  it("returns the fallback for malformed JSON", () => {
    localStorage.setItem("broken", "{");
    expect(readJson("broken", { safe: true })).toEqual({ safe: true });
  });
  it("removes a group of keys", () => {
    localStorage.setItem("a", "1"); localStorage.setItem("b", "2");
    expect(removeStoredMany(["a", "b"])).toBe(true);
    expect(localStorage.getItem("a")).toBeNull();
    expect(localStorage.getItem("b")).toBeNull();
  });
  it("survives storage write failures", () => {
    const spy = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("quota"); });
    expect(writeText("x", "y")).toBe(false);
    spy.mockRestore();
  });
});
