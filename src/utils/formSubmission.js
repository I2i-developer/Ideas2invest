const THANK_YOU_ACCESS_KEY = "i2i_thank_you_access";

export function markFormSubmitted() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(THANK_YOU_ACCESS_KEY, "1");
  } catch {
    // sessionStorage unavailable (private browsing, storage disabled, etc.)
  }
}

export function consumeFormSubmitted() {
  if (typeof window === "undefined") return false;
  try {
    const allowed = window.sessionStorage.getItem(THANK_YOU_ACCESS_KEY) === "1";
    window.sessionStorage.removeItem(THANK_YOU_ACCESS_KEY);
    return allowed;
  } catch {
    return false;
  }
}
