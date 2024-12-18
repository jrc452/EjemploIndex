const body = document.getElementById('body');
const header = document.getElementById('header');
const modeBtn = document.getElementById('modeBtn');
const container = document.getElementById('container');
const lateral1 = document.getElementById('lateral1');
const lateral2 = document.getElementById('lateral2');
const footer = document.getElementById('footer');

function switchTheme() {
    body.classList.toggle('body-dark');
    header.classList.toggle('header-dark');
    modeBtn.classList.toggle('mode-button-dark');
    container.classList.toggle('container-dark');
    lateral1.classList.toggle('lateral1-dark');
    lateral2.classList.toggle('lateral2-dark');
    footer.classList.toggle('footer-dark');
}
