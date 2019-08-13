import images from '../src/images.js';
import htmlToDOM from '../src/utils/html-to-DOM.js';
import renderCreature from '../src/render-creature.js';

const hornCreatureRender = document.querySelector('.list');

images.forEach(creature => {
    const html = renderCreature(creature);
    const dom = htmlToDOM(html);
    hornCreatureRender.appendChild(dom);
});
