import { TitleBlock, TextBlock } from './blocks';

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector);
    this.update = update;
    this.blocksConstructors = {
      title: TitleBlock,
      text: TextBlock,
    };
    this.init();
  };

  init() {
    this.$el.innerHTML = this.template;
    this.$el.addEventListener('submit', this.addBlock.bind(this));
  };

  get template() {
    return [
      block('title'),
      block('text')
    ].join('');
  };

  addBlock(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    event.target.value.value = '';
    event.target.styles.value = '';

    const Constructor = this.blocksConstructors[type];
    const block = new Constructor(value, { styles });
    this.update(block);
  };
}

function block(type) {
  return `
    <form name='${type}'>
      <h5>${type}</h5>
      <div class='form-group'>
        <input class='form-control form-control-sm' type='text' name='value' placeholder='value'/>
      </div>
      <div class='form-group'>
        <input class='form-control form-control-sm' type='text' name='styles' placeholder='styles'/>
      </div>
      <button class='btn btn-primary btm-sm' type='submit'>Добавить</button>
    </form>
    <hr />
  `;
}