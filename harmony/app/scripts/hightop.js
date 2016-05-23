// ES6: Modules don't not need explicit strict mode

// E66: Default module import
import Shoe from 'scripts/shoe';

// ES6: Class extending parent class Shoe
export default class Hightop extends Shoe
{
  // ES6: Constructor
  constructor(shoeData) {
    // ES6: Invoking the parent classes constructor
    super(shoeData);

    this.imageNames = ['front', 'left', 'back', 'right', 'shoe'];
  }

  // ES6: Overriding the parent's imageIterator generator function
  *imageIterator() {
    let i = 0;

    while (true) {
      let nextImageName = this.imageNames[i % this.imageNames.length];
      yield this.images[nextImageName];
      i++;
    }
  }
}
