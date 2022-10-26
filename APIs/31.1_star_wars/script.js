
//* https://swapi.dev/api/people/1

/**
  1. Name
  2. Height
  3. Hair Color
  4. The planet they came from
  5. Planet population
 */

const data = [];

const fetchData = async (num) => {
  try {
    const url = 'https://swapi.dev/api/people/' + num;
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error('Error fetching');
    }
  
    const tmpData = await res.json();
    const tmp = {name: tmpData.name, height: tmpData.height, hairColor: tmpData.hair_color};

    const planet_res = await fetch(tmpData.homeworld);
    const planetData = await planet_res.json();

    tmp.planet = {name: planetData.name, population: planetData.population};
    return tmp;
  }
  catch(error) {
    errorMsg.textContent = `username "${user}" not found`;
  }
};

const fetchNCharacters = async (num) => {
  for(let i = 1; i <= num; i++) {
    const tmp = await fetchData(i);
    data.push(tmp);
    console.log(tmp);
  }
}

const start = async () => {
  await fetchNCharacters(10);
  console.log(data);
  displayData(data);

};

start();