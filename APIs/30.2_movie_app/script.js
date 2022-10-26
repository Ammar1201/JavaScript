
//* https://www.omdbapi.com/?i=tt3896198&apikey=c469cd9c

//* https://www.omdbapi.com/?apikey=c469cd9c&

//* https://www.omdbapi.com/?apikey=[key]c&t=shark

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

let tmpMovieContainer;

let oldMovie = false;

const fetchData = async (title) => {
  try {
    const url = 'https://www.omdbapi.com/?apikey=c469cd9c&t=' + title;
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error('Error fetching');
    }
  
    const data = await res.json();
    displayMovie(data);
    oldMovie = true;
  }
  catch(error) {
    errorMsg.textContent = `movie "${title}" not found`;
  }
}

const displayMovie = (movie) => {

  tmpMovieContainer = document.createElement('div');
  tmpMovieContainer.id  = 'tmp';

  movieContainer.appendChild(tmpMovieContainer);

  const poster = document.createElement('img');
  poster.src = movie.Poster;
  tmpMovieContainer.appendChild(poster);

  const information = document.createElement('div');
  displayMovie.id = 'information';

  tmpMovieContainer.appendChild(information);

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

  const rate = document.createElement('h2');
  rate.textContent = 'Ratings:';
  information.appendChild(rate);

  const ratings = document.createElement('div');
  ratings.id = 'ratings';
  information.appendChild(ratings);
  displayRatings(movie, ratings);
};

const displayRatings = (movie, ratings) => {

  let imdb = movie.imdbRating, rotten, metacritic;

  movie.Ratings.forEach(rating => {
    switch (rating.Source) {
      case 'Rotten Tomatoes':
        rotten = rating.Value;
        break;
      case 'Metacritic':
        metacritic = rating.Value;
        break;
    }
  });

  if(imdb !== undefined) {
    const rating1 = document.createElement('div');
    rating1.classList.add('rating');
    const imgIMDB = document.createElement('img');
    imgIMDB.src = './img/imdb.png';
    const span = document.createElement('span');
    span.textContent = `${imdb}/10`;
    rating1.appendChild(imgIMDB);
    rating1.appendChild(span);
    ratings.appendChild(rating1);
  }

  if(rotten !== undefined) {
    const rating2 = document.createElement('div');
    rating2.classList.add('rating');
    const imgTomato = document.createElement('img');
    imgTomato.src = './img/tomato.png';
    const span2 = document.createElement('span');
    span2.textContent = rotten;
    rating2.appendChild(imgTomato);
    rating2.appendChild(span2);
    ratings.appendChild(rating2);
  }

  if(metacritic !== undefined) {
    const rating3 = document.createElement('div');
    rating3.classList.add('rating');
    const imgMetacritic = document.createElement('img');
    imgMetacritic.src = './img/metacritic.png';
    const span3 = document.createElement('span');
    span3.textContent = metacritic;
    rating3.appendChild(imgMetacritic);
    rating3.appendChild(span3);
    ratings.appendChild(rating3);
  }
};

const deleteOldMovie = () => {
  tmpMovieContainer.remove();
}

window.addEventListener('load', () => {
  searchInput.focus();
})

searchBtn.addEventListener('click', () => {
  const title = searchInput.value;

  if(title === '') {
    errorMsg.textContent = 'Please enter a title';
    return;
  }

  if(oldMovie) {
    deleteOldMovie();
    fetchData(title);
    searchInput.value = '';
    searchInput.focus();
    return;
  }

  fetchData(title);
  searchInput.value = '';
  searchInput.focus();
});

searchInput.addEventListener('keydown', (event) => {
  const key = event.key;
  const title = event.target.value;

  if(key === 'Enter') {
    if(title === '') {
      errorMsg.textContent = 'Please enter a title';
      return;
    }

    if(oldMovie) {
      deleteOldMovie();
      fetchData(title);
      event.target.value = '';
      searchInput.focus();
      return;
    }

    fetchData(title);
    event.target.value = '';
    searchInput.focus();
  }
});

searchInput.addEventListener('focus', () => {
  errorMsg.textContent = '';
});