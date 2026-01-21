const toggle = document.getElementById("theme-toggle");
const body = document.body;

/* Apply theme */
function setTheme(theme) {
  if (theme === "light") {
    body.classList.add("light-theme");
    toggle.checked = true;
  } else {
    body.classList.remove("light-theme");
    toggle.checked = false;
  }
}

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme || "dark");

/* Toggle event */
toggle.addEventListener("change", () => {
  const theme = toggle.checked ? "light" : "dark";
  localStorage.setItem("theme", theme);
  setTheme(theme);
});
