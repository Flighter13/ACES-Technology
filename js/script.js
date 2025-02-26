document.addEventListener("DOMContentLoaded", function () {
    fetch("text/home.txt") // Fetch the text file
        .then(response => response.text())
        .then(data => {
            document.getElementById("home-description").innerHTML = `<p>${data}</p>`;
        })
        .catch(error => {
            console.error("Error loading the description:", error);
            document.getElementById("home-description").innerHTML = "<p>Failed to load description.</p>";
        });
});
