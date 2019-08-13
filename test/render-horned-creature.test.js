import renderCreature from '../src/render-creature.js';

const test = QUnit.test;

QUnit.module('Render Creature Card');

test('renders html from data', assert => {
    // arrange
    const hornedCreature = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
        <li>
            <h2>UniWhal</h2>
            <div class="image-container">
                <img class="card-image" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="UniWhal">
            </div>
            <p>Horns: 1</p>
        </li>
    `;

    // act
    const html = renderCreature(hornedCreature);
    
    // assert
    assert.htmlEqual(html, expected);
});
