document.addEventListener("DOMContentLoaded", function () {
    fetch("text/home.md")
        .then(response => {
            if (!response.ok) throw new Error("Fetch failed");
            return response.text();
        })
        .then(data => {
            const html = marked.parse(data);
            document.getElementById("home-description").innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading the description:", error);
            document.getElementById("home-description").innerHTML = "<p>Failed to load description.</p>";
        });

    // Only attach toggle logic if the element exists
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});
