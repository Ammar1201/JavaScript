
//* https://www.omdbapi.com/?i=tt3896198&apikey=c469cd9c

//* https://www.omdbapi.com/?apikey=c469cd9c&

const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('button');
// const errorMsg = document.querySelector('#errorMsg');

window.addEventListener('load', () => {
  searchInput.focus();
})

searchInput.addEventListener('focus', () => {
  errorMsg.textContent = '';
});