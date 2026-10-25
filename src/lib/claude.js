import { supabase } from "./supabase.js";

const DEFAULT_TIMEOUT_MS = 45_000;

export class AiRequestError extends Error {
  constructor(code, status = 0) {
    super(code);
    this.name = "AiRequestError";
    this.code = code;
    this.status = status;
  }
}

export async function callClaude(body, { timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new AiRequestError("NOT_SIGNED_IN", 401);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/claude-proxy`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${session.access_token}` },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      const providerMessage = payload?.error?.message || payload?.error;
      if (response.status === 401) throw new AiRequestError("NOT_SIGNED_IN", 401);
      if (response.status === 413) throw new AiRequestError("FILE_TOO_LARGE", 413);
      if (response.status === 429) throw new AiRequestError("RATE_LIMITED", 429);
      if (response.status >= 500) throw new AiRequestError("SERVICE_UNAVAILABLE", response.status);
      throw new AiRequestError(providerMessage || "REQUEST_FAILED", response.status);
    }
    return await response.json();
  } catch (error) {
    if (error?.name === "AbortError") throw new AiRequestError("REQUEST_TIMEOUT", 408);
    if (error instanceof AiRequestError) throw error;
    throw new AiRequestError(typeof navigator !== "undefined" && navigator.onLine === false ? "OFFLINE" : "NETWORK_ERROR");
  } finally {
    clearTimeout(timer);
  }
}
