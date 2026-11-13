const STORAGE_KEY = "theme";
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme(theme) {
  root.dataset.theme = theme;
  toggle.setAttribute("aria-pressed", String(theme === "dark"));
}

applyTheme(getPreferredTheme());

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEY, next);
  setTheme(next);
});

// ScrollReveal animations are motion, so users who ask for reduced motion get none.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  ScrollReveal().reveal("main section", {
    distance: "1.5rem",
    duration: 600,
    easing: "ease-out",
    interval: 100,
    origin: "bottom",
  });
}
