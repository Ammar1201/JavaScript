
const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('button');
const errorMsg = document.querySelector('#errorMsg');

const userInformation = {
  avatar_url: '',
  login: '',
  public_repos: 0,
};

const users = [];

const isUserInformationEmpty = () => {
  return userInformation.avatar_url === '' && userInformation.login === '' && userInformation.public_repos === 0;
};

const fetchData = async (user) => {
  if(users.includes(user)) {
    return;
  }

  try {
    const url = 'https://api.github.com/users/' + user;
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error('Error fetching');
    }
  
    const data = await res.json();
    userInformation.avatar_url = data.avatar_url;
    userInformation.login = data.login;
    userInformation.public_repos = data.public_repos;
    users.push(user);
    appendToBody(data);
  }
  catch(error) {
    errorMsg.textContent = `username "${user}" not found`;
  }
}

const appendToBody = async (user) => {

  if(users.includes(user)) {
    return;
  }

  if(isUserInformationEmpty()) {
    return;
  }

  const div = document.createElement('div');
  div.id = 'card';
  const avatar_img = document.createElement('img');
  const login = document.createElement('a');
  const repos = document.createElement('a');

  avatar_img.src = userInformation.avatar_url;

  login.innerText = userInformation.login;
  login.href = `https://github.com/${user}`;
  login.target = '_blank';

  repos.innerText = userInformation.public_repos;
  repos.href = `https://github.com/${user}?tab=repositories`;
  repos.target = '_blank';

  div.appendChild(avatar_img);
  div.appendChild(login);
  div.appendChild(repos);

  document.body.append(div);
}

const handleError = (user = '') => {
  if(user === '') {
    errorMsg.textContent = `*you must provide a username`;
    return;
  }
  errorMsg.textContent = `*user "${user}" is already displayed`;
}

window.addEventListener('load', () => {
  searchInput.focus();
})

searchInput.addEventListener('keydown', (event) => {
  const key = event.key;
  const user = event.target.value;

  if(key === 'Enter') {
    if(user === '') {
      handleError(user);
      return;
    }

    if(users.includes(user)){
      handleError(user);
      event.target.value = '';
      return;
    }
    fetchData(user);
    event.target.value = '';
    searchInput.focus();
  }
});

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const user = searchInput.value;

  if(user === '') {
    handleError(user, 'Empty search');
    return;
  }

  if(users.includes(user)){
    handleError(user);
    searchInput.value = '';
    return;
  }

  fetchData(user);

  searchInput.value = '';
  searchInput.focus();
});

searchInput.addEventListener('focus', () => {
  errorMsg.textContent = '';
});