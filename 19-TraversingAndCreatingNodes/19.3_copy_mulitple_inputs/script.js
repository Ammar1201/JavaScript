
const inputs = document.querySelectorAll('.input');

// document.querySelector('#form').addEventListener("submit", function(event) {
//   event.preventDefault()
// });

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

document.querySelector('#form').addEventListener('keyup', moveNext);

function moveNext(event) {
  let target = event.srcElement || e.target;
  let maxLength = parseInt(target.attributes["maxlength"].value, 10);
  let myLength = target.value.length;
  if (myLength >= maxLength) {
    let next = target;
    while (next = next.nextElementSibling) {
      if (next == null) {
          break;
      }
      if (next.tagName.toLowerCase() === "input") {
        next.focus();
        break;
      }
    }
  }
}