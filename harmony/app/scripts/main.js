// ES6: Scripts still opt-in to strict mode
'use strict';

// ES6: Default module import
import ShoeFactory from 'scripts/shoeFactory';

// ES6: Named module import
import { getShoeData } from 'scripts/shoeResource';
import { Logger } from 'scripts/shoeFactory';

// ES6: 'let' is the new 'var'
let currentShoe;
let shoeFactory;
let shoeIterator;

// ES6: 'const' is for constants
const shoeLogger = new Logger();

function renderNextShoe() {
  if (currentShoe) { currentShoe.cleanup(); }

  // ES6: Iterator
  currentShoe = shoeIterator.next().value;
  shoeLogger.log(currentShoe);

  // ES6: default argument
  currentShoe.render();
  // currentShoe.render(250);
}

let shoeSelector = document.querySelector('#shoeSelector');
shoeSelector.addEventListener('click', renderNextShoe, false);

let styleSelector = document.querySelector('#shoeStyle');
// ES6: Inline arrow syntax with parameter
styleSelector.addEventListener('change', (event) => {
    shoeFactory.styleFilter = event.target.value;
    renderNextShoe();
  }, false);


// ES6: Resoving a promise for data
getShoeData()
  .then(shoeData => {
    shoeFactory = new ShoeFactory(shoeData);
    shoeIterator = shoeFactory.shoeIterator();

    renderNextShoe();
  });
