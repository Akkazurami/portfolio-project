const content = document.getElementById('content');
const toggle = document.getElementById('toggle');

const darkModeOff = () => {
    content.style.backgroundColor = 'white';
    content.style.color = 'black';
    toggle.removeEventListener('click', darkModeOff);
    setTimeout(() => toggle.addEventListener('click', darkModeOn), 0);
}

const darkModeOn = (event) => {
    content.style.backgroundColor = 'hsla(341, 18%, 13%, 1)';
    content.style.color = 'white';
    toggle.removeEventListener('click', darkModeOn);
    setTimeout(() => toggle.addEventListener('click', darkModeOff), 0);
}

toggle.addEventListener('click', darkModeOn);