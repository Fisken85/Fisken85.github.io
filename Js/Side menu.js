function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading menu:', error));
}

function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    menu.style.width = (menu.style.width === "250px") ? "0" : "250px";
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

// Dropdown med animasjon og arrow flip
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var button = dropdown.previousElementSibling;
    var arrow = button.querySelector('.arrow');

    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        arrow.classList.remove('rotate');
    } else {
        dropdown.classList.add('active');
        arrow.classList.add('rotate');
    }
}
