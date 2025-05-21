document.querySelectorAll('.overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
        if (!e.target.closest('.overlay-image')) {
            overlay.previousElementSibling.checked = false;
        }
    });
});
