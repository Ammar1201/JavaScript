
const jokeBtn = document.querySelector('button');

jokeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('https://api.jokes.one/jod')
    .then((res) => {
      if(!res.ok) {
        throw new Error('Error fetching');
      }
      else {
        res.json().then((data) => {
          console.log(data);
          const label = document.createElement('label');
          label.innerHTML = `<br> Joke Title is → ${data.contents.jokes[0].joke.title}<br> The joke is → ${data.contents.jokes[0].joke.text}`;
          document.body.appendChild(label);
        })
      }
    })
    .catch((err) => {
      console.log(err);
    });
});