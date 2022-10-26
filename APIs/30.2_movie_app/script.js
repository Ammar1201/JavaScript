
//* https://www.omdbapi.com/?i=tt3896198&apikey=c469cd9c

//* https://www.omdbapi.com/?apikey=c469cd9c&

/**
1. Movie poster **
2. Movie title ***
3. Genre **
4. Year **
5. Plot ** 
6. Director **
7. Actors 
8. Ratings of movies from IMDB, rotten tomatoes, and
Metacritic. (make sure that particular movie gives you all
the ratings. It could be, that movie won’t give you all 3
ratings)
 */

const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('button');
const errorMsg = document.querySelector('#errorMsg');
const movieContainer = document.querySelector('#movie-container');

const fetchData = async (title) => {
  try {
    const url = 'https://www.omdbapi.com/?apikey=c469cd9c&t=' + title;
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error('Error fetching');
    }
  
    const data = await res.json();
    console.log(data);
    displayMovie(data);
  }
  catch(error) {
    errorMsg.textContent = `movie "${title}" not found`;
  }
}

const displayMovie = (movie) => {
  const poster = document.createElement('img');
  console.log(movie.Poster);
  poster.src = movie.Poster;
  movieContainer.appendChild(poster);

  const information = document.createElement('div');
  displayMovie.id = 'information';

  movieContainer.appendChild(information);

  const title = document.createElement('h1');
  title.textContent = movie.Title;
  information.appendChild(title);

  const plot = document.createElement('p');
  plot.textContent = movie.Plot;
  information.appendChild(plot);

  const director = document.createElement('h2');
  director.textContent = `Director: ${movie.Director}`;
  information.appendChild(director);

  const genre = document.createElement('h2');
  genre.textContent = `Genres: ${movie.Genre}`;
  information.appendChild(genre);

  const actors = document.createElement('h2');
  actors.textContent = `Actors: ${movie.Actors}`;
  information.appendChild(actors);

  const released = document.createElement('h2');
  released.textContent = `Released: ${movie.Released}`;
  information.appendChild(released);
};

window.addEventListener('load', () => {
  searchInput.focus();
})

searchInput.addEventListener('focus', () => {
  errorMsg.textContent = '';
});

searchBtn.addEventListener('click', () => {
  fetchData('lucy');
});