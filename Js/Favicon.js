const lightFavicon = 'Bilder/Favicon_kvit.png';
const darkFavicon = 'Bilder/Favicon.png';

function setFavicon(href) {
    const link = document.getElementById('dynamisk-favicon');
    if (link) {
        link.href = href + '?v=' + new Date().getTime();
    }
}

function oppdater() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setFavicon(lightFavicon);
    } else {
        setFavicon(darkFavicon);
    }
}

oppdater();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', oppdater);
