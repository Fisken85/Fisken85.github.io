function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.width = menu.style.width === "250px" ? "0" : "250px";
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            const dropdownContainer = this.nextElementSibling;
            dropdownContainer.style.display = dropdownContainer.style.display === "block" ? "none" : "block";
        });
    });
});
