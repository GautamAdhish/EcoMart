const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme or prefer-color-scheme
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme
function setTheme(theme) {
    if (theme === "light") {
        body.classList.add("light-theme");
        // Save to localStorage
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
    }
}

// Load saved theme on page load
if (savedTheme) {
    setTheme(savedTheme);
} else if (prefersDark) {
    setTheme("dark");
} else {
    setTheme("light");
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
    
    // Add a subtle animation feedback
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 150);
});