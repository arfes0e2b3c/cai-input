createTag();
function createTag() {
  let form = document.getElementById('AnswerViewForm');
  
  let div = document.createElement('div');
  div.setAttribute('id', 'div');
  form.before(div);

  let copy = document.createElement('button');
  copy.setAttribute('id', 'copy');
  copy.textContent = 'コピー';
  div.appendChild(copy);
  
  let pasteText = document.createElement('textarea');
  pasteText.setAttribute('id', 'paste-textarea');
  pasteText.placeholder = '答えを入力してください'
  div.appendChild(pasteText);
  
  let paste = document.createElement('button');
  paste.setAttribute('id', 'paste');
  paste.textContent = 'ペースト';
  div.appendChild(paste);
  
  let copyText = document.createElement('textarea');
  copyText.setAttribute('id', 'copy-textarea');
  div.appendChild(copyText);
  
}

function copy() {
  let copyText = document.getElementById('copy-textarea');
  copyText.value = readValues();
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);

function readValues() {
  const inputs = document.getElementsByTagName("input");
  const values = getValue(inputs);
  return JSON.stringify(values);
}

function getValue(inputs) {
  let values =[];
  for (const input of inputs) {
    values.push(input.value);
  }
  return values;
}

function paste() {
  const arr = document.getElementById('paste-textarea');
  setAnswer(arr.value);
}

document.querySelector("#paste").addEventListener("click", paste);

function setAnswer(values){
  values = values.slice(2,-2).split('","');
  console.log(values);
  const inputs = document.getElementsByTagName("input");
  if(values[1] === inputs[1].value) {
    console.log(values);
    for (let i=0;i<values.length;i++) {
      inputs[i].value = values[i];
    }
  }
}

