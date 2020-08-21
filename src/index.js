import { model } from './model';
import './styles/main.css';

const site = document.querySelector('#site');

model.forEach(block => {
  let html;
  if (block.type === 'title') {
    html = title(block);
  } else if (block.type === 'text') {
    html = text(block);
  } else if (block.type === 'textColumns') {
    html = textColumns(block);
  }
  
  site.insertAdjacentHTML('beforeend', html);
});

function title(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `;
};

function text(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
    </div>
  `;
};

function textColumns(block) {
  return `<div class="row">
  ${block.value.reduce((acc, value) => `${acc}<div class="col-sm"><p>${value}</p></div>`, '')}
  </div>
  `;
};