
const inputs = document.querySelectorAll('.input');

// const verficationCode = document.querySelectorAll('label')[1];

// verficationCode.addEventListener('copy', (event) => {
//   console.log(event);
// });

document.querySelector('#form').addEventListener("submit", function(event) {
  event.preventDefault()
});

document.querySelector('#form').addEventListener('paste', pasting);

function pasting(event) {
  let text = event.clipboardData.getData('text/plain');
  let counter = 0;

  if(text.length > 6) {
    return;
  }

  for(let i = 0; i < text.length; i++) {
    if(text[i] === undefined) {
      inputs[i].value == '';
    }
    else {
      inputs[i].value = text[i];
      counter += 1;
    }
  }

  event.preventDefault();

  if(counter === 6) {
    document.getElementById('form').submit();
  }
}