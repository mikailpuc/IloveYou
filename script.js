const container = document.querySelector('.container');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const Q = document.querySelector('.Q');
const containerRect = container.getBoundingClientRect();
const noBtn = no.getBoundingClientRect();
yes.addEventListener('click', () => {
    Q.innerHTML = 'I Love You Toooo!😙';
});
no.addEventListener('mouseover', () => {
const i = Math.floor(Math.random() * (containerRect.width - noBtn.width)) + 1;
const j = Math.floor(Math.random() * (containerRect.height - noBtn.height)) + 1;
no.style.left = i + 'px';
no.style.top = j + 'px';
});