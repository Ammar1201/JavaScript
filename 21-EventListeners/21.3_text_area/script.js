
const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
  const textArea = document.querySelector('#textarea');
  const label = document.querySelector('.label')
  if(textArea.value.length != 100) {
    label.style.visibility = 'visible';
    event.preventDefault();
  }
  else {
    //TODO form submits when there is more than 100 characters
    label.style.visibility = 'hidden';
    document.querySelector('form').submit();
    document.querySelector('form').unbind('button').submit();
  }
  console.log(textArea.value.length);
});