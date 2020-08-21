import { row, col } from './utils.js';

function title(block) {
  const { styles = '', tag = 'h1' } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), styles);
};

function text(block) {
  return row(col(`<p>${block.value}</p>`), block.options.styles);
};

function textColumns(block) {
  const html = block.value.map(value => col(value));
  return row(html.join(''), block.options.styles);
};

function img(block) {
  const { value, imgOptions, rowOptions } = block;
  const { alt, styles } = imgOptions;
  const html = `<img src='${value}' alt='${alt}' style='${styles}'/>`;
  return row(html, rowOptions.styles);
};

export const templates = {
  title,
  text,
  textColumns,
  img,
}
