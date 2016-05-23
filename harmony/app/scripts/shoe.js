// ES6: Modules don't not need explicit strict mode

// ES6: Default export for this module.
// ES6: Uses class syntax
export default class Shoe {
  // ES6: Constructor function
  constructor(shoeData) {
    this.name = shoeData.name;
    this.brand = shoeData.brand;
    this.price = shoeData.price;
    this.images = shoeData.images;
    this.style = shoeData.style;
  }

  // ES6: Generator function
  *imageIterator() {
    // First call to iterator.next() would enter here
    let i = 0;
    const propertyNames = Object.getOwnPropertyNames(this.images);

    while (true) {
      let curName = propertyNames[i % propertyNames.length];

      yield this.images[curName];
      // Second, Third, ... call to iterator.next() would re-enter here
      // and remain in the loop

      i++;
    }
  }

  // ES6: Class getter
  get title() {
    // ES6: Template strings interolate variables into string templates.
    return `${this.brand} ${this.name}`;
  }

  // ES6: Default argument
  render(renderTime = 1500) {
    let titleElem = document.querySelector('#title');
    titleElem.innerHTML = this.title;

    let priceElem = document.querySelector('#price');
    priceElem.innerHTML = this.price;

    let styleElem = document.querySelector('#style');
    styleElem.innerHTML = this.style;

    let picElem = document.querySelector('#picture');
    picElem.src = this.images.shoe;

    // ES6: Manual use of iterator
    const iter = this.imageIterator();

    // ES6: Arrow syntax with multiline body
    this.intervalId = window.setInterval(() => {
      var imageSrc = iter.next().value;
      picElem.src = imageSrc;
    }, renderTime);
  }

  cleanup() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }
}
