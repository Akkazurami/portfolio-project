const content = document.getElementById('content');
const toggle = document.getElementById('toggle');
const links = document.getElementsByClassName('link');

console.log(links);

const darkModeOff = () => {
    content.style.backgroundColor = 'white';
    content.style.color = 'black';
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = 'black';
    };
    toggle.removeEventListener('click', darkModeOff);
    setTimeout(() => toggle.addEventListener('click', darkModeOn), 0);
}

const darkModeOn = () => {
    content.style.backgroundColor = 'hsla(284, 0%, 10%, 1)';
    content.style.color = 'white';
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = 'white';
    };
    toggle.removeEventListener('click', darkModeOn);
    setTimeout(() => toggle.addEventListener('click', darkModeOff), 0);
}

toggle.addEventListener('click', darkModeOn);