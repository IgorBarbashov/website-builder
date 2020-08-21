import { row, col } from '../utils.js';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error();
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles = '', tag = 'h1' } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), this.options.styles);
  }
}

export class TextColumnBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const html = this.value.map(value => col(value));
    return row(html.join(''), this.options.styles);
  }
}

export class ImgBlock extends Block {
  constructor(value, imgOptions, rowOptions) {
    super(value, {});
    this.imgOptions = imgOptions;
    this.rowOptions = rowOptions;
  }

  toHTML() {
    const { alt, styles } = this.imgOptions;
    const html = `<img src='${this.value}' alt='${alt}' style='${styles}'/>`;
    return row(html, this.rowOptions.styles);
  }
}