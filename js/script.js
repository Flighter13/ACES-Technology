document.addEventListener("DOMContentLoaded", function () {
    fetch("text/home.md")
        .then(response => response.text())
        .then(data => {
            const html = marked.parse(data); // Convert Markdown to HTML
            document.getElementById("home-description").innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading the description:", error);
            document.getElementById("home-description").innerHTML = "<p>Failed to load description.</p>";
        });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
