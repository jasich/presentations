
const shoeData = [
{
  brand: 'Nike',
  name: 'Zoom HyperRev 2015',
  price: '$130.00',
  style: 'hightop',
  images: {
    front: '/images/nike-zoom-hyperrev.front.jpg',
    left: '/images/nike-zoom-hyperrev.left.jpg',
    right: '/images/nike-zoom-hyperrev.right.jpg',
    back: '/images/nike-zoom-hyperrev.back.jpg',
    top: '/images/nike-zoom-hyperrev.top.jpg',
    bottom: '/images/nike-zoom-hyperrev.bottom.jpg',
    shoe: '/images/nike-zoom-hyperrev.shoe.jpg',
  }
},
{
  brand: 'Nike',
  name: 'Air Max Stutter Step 2',
  price: '$90.00',
  style: 'hightop',
  images: {
    front: '/images/nike-air-max-stutter.front.jpg',
    left: '/images/nike-air-max-stutter.left.jpg',
    right: '/images/nike-air-max-stutter.right.jpg',
    back: '/images/nike-air-max-stutter.back.jpg',
    top: '/images/nike-air-max-stutter.top.jpg',
    bottom: '/images/nike-air-max-stutter.bottom.jpg',
    shoe: '/images/nike-air-max-stutter.shoe.jpg',
  }
},
{
  brand: 'Nike',
  name: 'Zoom Run the One',
  price: '$100.00',
  style: 'lowtop',
  images: {
    front: '/images/nike-run-the-one.front.jpg',
    left: '/images/nike-run-the-one.left.jpg',
    right: '/images/nike-run-the-one.right.jpg',
    back: '/images/nike-run-the-one.back.jpg',
    top: '/images/nike-run-the-one.top.jpg',
    bottom: '/images/nike-run-the-one.bottom.jpg',
    shoe: '/images/nike-run-the-one.shoe.jpg',
  }
}];

export function getShoeData() {
  // ES6: Promise resolving our shoe data
  return new Promise((resolve, reject) => {
    resolve(shoeData);
  });
}
