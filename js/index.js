let x = [];

readAnswer();
setAnswer();
createTag();
function readAnswer() {
  const inputs = document.getElementsByTagName("input");
  const values = getValue(inputs);
  x = JSON.stringify(values);
}
function getValue(inputs) {
  let values =[];
  for (const input of inputs) {
    values.push(input.value);
  }
  return values;
}
function setAnswer(){
  const inputs = document.getElementsByTagName("input");
    if(x[1] === inputs[1].value) {
    for (let i=0;i<x.length;i++) {
      inputs[i].value = x[i];
    }
  }
}
function createTag() {
  let content = document.getElementById('content');
  
  let pasteText = document.createElement('textarea');
  pasteText.setAttribute('id', 'textarea');
  copyText.value = x
  content.after(copyText);

  let copyText = document.createElement('textarea');
  copyText.setAttribute('id', 'copy-textarea');
  copyText.value = x
  content.after(copyText);
  
  let button = document.createElement('button');
  button.setAttribute('id', 'copy');
  button.textContent = 'コピー'
  content.after(button);

}
function copy() {
  let copyText = document.getElementById('copy-textarea');
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
