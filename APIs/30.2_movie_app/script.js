
//* https://www.omdbapi.com/?i=tt3896198&apikey=c469cd9c

//* https://www.omdbapi.com/?apikey=c469cd9c&

const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('button');
const errorMsg = document.querySelector('#errorMsg');

const fetchData = async (title) => {
  try {
    const url = 'https://www.omdbapi.com/?apikey=c469cd9c&t=' + title;
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error('Error fetching');
    }
  
    const data = await res.json();
    console.log(data);
  }
  catch(error) {
    errorMsg.textContent = `movie "${title}" not found`;
  }
}

const displayMovie = (movie) => {

};

window.addEventListener('load', () => {
  searchInput.focus();
})

// searchInput.addEventListener('focus', () => {
//   errorMsg.textContent = '';
// });

searchBtn.addEventListener('click', () => {
  fetchData('lucy');
});