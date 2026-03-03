function toggleDropdown() {
    document.getElementById("resumeMenu").classList.toggle("show");
}

window.addEventListener("click", function(e){
    const dropdown = document.querySelector(".resume-dropdown");
    if (!dropdown.contains(e.target)) {
        document.getElementById("resumeMenu").classList.remove("show");
    }
});

window.addEventListener("scroll", function(){
    document.querySelector("header")
    .classList.toggle("sticky", window.scrollY > 50);
});
