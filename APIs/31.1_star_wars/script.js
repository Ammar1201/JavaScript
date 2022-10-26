
//* https://swapi.dev/api/people/1

/**
  1. Name
  2. Height
  3. Hair Color
  4. The planet they came from
  5. Planet population
 */

const table = document.createElement('table');

const initializeTable = () => {
  document.body.appendChild(table);
  const th = document.createElement('th');
  th.setAttribute('colspan', '5');
  th.textContent = 'Star Wars';
  table.appendChild(th);
}

const addDataKeys = (data) => {
  const row = document.createElement('tr');
  table.appendChild(row);
  for(let key in data) {
    if(typeof data[key] !== 'object') {
      const th = document.createElement('th');
      th.textContent = key;
      row.appendChild(th);
    }
    else {
      for(let value in data[key]) {
        const th = document.createElement('th');
        th.textContent = `planet ${value}`;
        row.appendChild(th);
      }
    }
  }
};

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
  const data = [];
  for(let i = 1; i <= num; i++) {
    const tmp = await fetchData(i);
    data.push(tmp);
  }
  return data;
}

const displayData = async () => {
  const data = await fetchNCharacters(10);

  initializeTable();
  addDataKeys(data[0]);

  for(let i = 0; i < data.length; i++) {
    const row = document.createElement('tr');
    for(let key in data[i]) {
      if(typeof data[i][key] !== 'object') {
        const td = document.createElement('td');
        td.textContent = data[i][key];
        row.appendChild(td);
      }
      else {
        for(let objKey in data[i][key]) {
          const td = document.createElement('td');
          td.textContent = `${data[i][key][objKey]}`;
          row.appendChild(td);
        }
      }
    }
    table.appendChild(row);
  }
};

const start = async () => {
  displayData();
};

start();