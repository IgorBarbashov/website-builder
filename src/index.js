import { Site } from './classes/site';
import { Sidebar } from './classes/sidebar';
import { model } from './model';
import './styles/main.css';

const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};
new Sidebar('#panel', updateCallback);

const site = new Site('#site');
site.render(model);
