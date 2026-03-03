function toggleDropdown() {
    const menu = document.getElementById("resumeMenu");
    menu.style.display = menu.style.display === "block" ? "block" : "block";
}

window.onclick = function(e) {
    if (!e.target.closest('.resume-dropdown')) {
        document.getElementById("resumeMenu").style.display = "none";
    }
}
