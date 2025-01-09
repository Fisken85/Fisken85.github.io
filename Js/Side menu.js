function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (menu.style.width === "350px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "275px";
    }   
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

document.querySelectorAll(".dropdown-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        const dropdownContainer = this.nextElementSibling;
        if (dropdownContainer.style.display === "block") {
            dropdownContainer.style.display = "none";
        } else {
            dropdownContainer.style.display = "block";
        }
    });
});