const content = document.getElementById('content');

const darkModeOn = () => {
    content.style.backgroundColor = 'hsla(341, 18%, 13%, 1)';
    content.style.color = 'white';
}

const toggle = document.getElementById('toggle');
toggle.addEventListener('click', darkModeOn);