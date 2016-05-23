// ES6: Module don't not need explicit strict mode

// ES6: Default module imports
import Hightop from 'scripts/hightop';
import Lowtop from 'scripts/lowtop';

// ES6: Importing the default module under a different name
import {default as DefaultShoe} from 'scripts/shoe';


// ES6: Module scoped variable, that's not exported
const defaultStyle = 'all';


// ES6: Default export for this module.
// ES6: Uses class syntax
export default class ShoeFactory {

  // ES6: Constructor function
  constructor(shoeData) {
    this.styleFilter = defaultStyle;
    this.shoeData = shoeData;
  }

  // ES6: Generator function which returns an Iterator.
  *shoeIterator() {
    let i = 0;
    while (true) {

      let selectedShoeStyles = this.shoeData;
      if (this.styleFilter !== defaultStyle) {

        // ES6: Arrow notation, shorthand for:
        //  function (x) { return x.style === this.styleFilter; }
        selectedShoeStyles = this.shoeData.filter(x => x.style === this.styleFilter);
      }

      let shoe = selectedShoeStyles[i % selectedShoeStyles.length];

      switch (shoe.style) {
        case 'hightop':
          yield new Hightop(shoe);    // ES6: Generator functions use yield to yield control to caller
          break;
        case 'lowtop':
          yield new Lowtop(shoe);
          break;
        default:
          yield new DefaultShoe(shoe);
          break;
      }

      i++;
    }
  }
}

export class ShoeLogger {
  log(shoe) {
    // ES6: Template strings interolate variables into string templates.
    console.log(`Name: ${shoe.name} - (${shoe.style})`);
  }
}

// ES6: Export with an alias
export { ShoeLogger as Logger }
