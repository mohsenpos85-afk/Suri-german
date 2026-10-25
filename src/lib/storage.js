const STORAGE_ERROR_EVENT = "suri:storage-error";

function reportStorageError(operation, key, error) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(STORAGE_ERROR_EVENT, {
    detail: { operation, key, message: String(error?.message || error || "Storage unavailable") },
  }));
}

export function readText(key, fallback = "") {
  if (typeof localStorage === "undefined") return fallback;
  try { return localStorage.getItem(key) ?? fallback; }
  catch (error) { reportStorageError("read", key, error); return fallback; }
}

export function readJson(key, fallback) {
  const raw = readText(key, "");
  if (!raw) return fallback;
  try { return JSON.parse(raw); }
  catch (error) { reportStorageError("parse", key, error); return fallback; }
}

export function writeText(key, value) {
  if (typeof localStorage === "undefined") return false;
  try { localStorage.setItem(key, String(value)); return true; }
  catch (error) { reportStorageError("write", key, error); return false; }
}

export function writeJson(key, value) {
  try { return writeText(key, JSON.stringify(value)); }
  catch (error) { reportStorageError("serialize", key, error); return false; }
}

export function removeStored(key) {
  if (typeof localStorage === "undefined") return false;
  try { localStorage.removeItem(key); return true; }
  catch (error) { reportStorageError("remove", key, error); return false; }
}

export function removeStoredMany(keys) {
  return keys.every((key) => removeStored(key));
}

export { STORAGE_ERROR_EVENT };
