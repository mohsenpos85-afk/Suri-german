import { Capacitor } from "@capacitor/core";
import { Browser } from "@capacitor/browser";
import { supabase } from "./supabase.js";

export const NATIVE_AUTH_REDIRECT = "com.surigerman.app://auth/callback";

export function getAuthRedirectUrl() {
  return Capacitor.isNativePlatform() ? NATIVE_AUTH_REDIRECT : window.location.origin;
}

export function parseAuthCallback(url) {
  if (!url) return null;
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  if (parsed.protocol !== "com.surigerman.app:" || parsed.hostname !== "auth" || parsed.pathname !== "/callback") return null;
  const query = parsed.searchParams;
  const fragment = new URLSearchParams(parsed.hash.replace(/^#/, ""));
  const error = query.get("error_description") || fragment.get("error_description") || query.get("error") || fragment.get("error");
  if (error) return { error };
  const code = query.get("code");
  if (code) return { code };
  const accessToken = fragment.get("access_token");
  const refreshToken = fragment.get("refresh_token");
  if (accessToken && refreshToken) return { accessToken, refreshToken };
  return null;
}

export async function completeAuthCallback(url) {
  const callback = parseAuthCallback(url);
  if (!callback) return false;
  try { await Browser.close(); } catch { /* Browser may already be closed. */ }
  if (callback.error) throw new Error(callback.error);
  if (callback.code) {
    const { error } = await supabase.auth.exchangeCodeForSession(callback.code);
    if (error) throw error;
    return true;
  }
  const { error } = await supabase.auth.setSession({
    access_token: callback.accessToken,
    refresh_token: callback.refreshToken,
  });
  if (error) throw error;
  return true;
}

export async function startGoogleOAuth() {
  const native = Capacitor.isNativePlatform();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: getAuthRedirectUrl(),
      skipBrowserRedirect: native,
    },
  });
  if (error) throw error;
  if (native && data?.url) await Browser.open({ url: data.url, presentationStyle: "popover" });
  return data;
}
