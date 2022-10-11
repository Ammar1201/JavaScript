
const startHere = document.querySelector('.start-here');

startHere.textContent = 'main title';

const subtitle4 = document.createElement('li');
subtitle4.textContent = 'subtitle 4';
document.querySelectorAll('ul')[1].appendChild(subtitle4);


document.querySelector('title').text = 'Master Of The Dom';

document.querySelector('div p').textContent = 'The DOM is annoying';


const lastLI = document.querySelectorAll('li')[7];
lastLI.remove();

// document.querySelector('ul').removeChild(document.querySelector('ul')[3]);
