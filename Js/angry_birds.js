const fugl = document.getElementById('bouncing-image');
let klikkTeller = 0;
let bevegerSeg = false;

let fartX = Math.random() < 0.5 ? 8 : -3;
let fartY = Math.random() < 0.5 ? -8 : -2;

const breddeFugl = fugl.offsetWidth;
const hoydeFugl = fugl.offsetHeight;

let startX = 620;
let startY = 1250;

let posX = startX;
let posY = startY;

fugl.style.position = 'absolute';
fugl.style.left = posX + 'px';
fugl.style.top = posY + 'px';
fugl.style.transition = 'transform 0.2s';

fugl.addEventListener('click', () => {
    klikkTeller++;
    if (klikkTeller >= 10 && !bevegerSeg) {
        bevegerSeg = true;
        animerFugl();
    }
});

function animerFugl() {
    function beveg() {
        if (!bevegerSeg) return;

        const skjermBredde = window.innerWidth;
        // Use viewport height plus current scroll position as max Y boundary
        const maksHoyde = window.innerHeight + window.pageYOffset;

        posX += fartX;
        posY += fartY;

        if (posX <= -100) {
            posX = -100;
            fartX = -fartX;
            fugl.style.transform = `scaleX(${fartX > 0 ? 1 : -1})`;
        } else if (posX + breddeFugl >= skjermBredde) {
            posX = skjermBredde - breddeFugl;
            fartX = -fartX;
            fugl.style.transform = `scaleX(${fartX > 0 ? 1 : -1})`;
        }

        if (posY <= 0) {
            posY = 0;
            fartY = -fartY;
        } else if (posY + hoydeFugl >= maksHoyde) {
            posY = maksHoyde - hoydeFugl;
            fartY = -fartY;
        }

        fugl.style.left = posX + 'px';
        fugl.style.top = posY + 'px';

        requestAnimationFrame(beveg);
    }

    beveg();
}
