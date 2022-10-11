
/* <div class="container">
  <label>Text to copy:</label>
  <br>
  <label>123456</label>
  <form action="" class="box" id="form">
    <input type="text" class="input" maxlength="1">
    <input type="text" class="input" maxlength="1">
    <input type="text" class="input" maxlength="1">
    <input type="text" class="input" maxlength="1">
    <input type="text" class="input" maxlength="1">
    <input type="text" class="input" maxlength="1">
    <input type="submit" value="Verify" class="btn">
  </form>
</div> */

const div = document.createElement('div');
div.style.width = '200px';
div.style.height = '200px';
div.style.margin = 'auto';
div.style.textAlign = 'center';

const label1 = document.createElement('label');
label1.textContent = 'Text to copy:';
label1.style.marginBottom = '5px';

const br = document.createElement('br');

const label2 = document.createElement('label');
label2.textContent = '123456';

const form = document.createElement('form');
form.style.textAlign = 'center';

const btn = document.createElement('input');
btn.type = 'submit';
btn.value = 'Verify';

document.body.append(div);
div.append(label1);
div.append(br);
div.append(label2);
div.append(form);

for(let i = 0; i < 6; i++) {
  const input = document.createElement('input');
  input.style.width = '15px';
  input.maxLength = '1';
  form.append(input);
  if(i !== 5) {
    input.style.marginRight = '4px';
  }
}

form.append(btn);