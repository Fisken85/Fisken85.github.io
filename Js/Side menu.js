function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        })
}

function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    menu.classList.toggle('closed');
}

function closeMenu() {
    document.getElementById("sideMenu").classList.add('closed');
}

function openMenu() {
    document.getElementById("sideMenu").classList.remove('closed');
}

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
