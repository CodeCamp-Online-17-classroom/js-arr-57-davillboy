// write code here
const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' }
];

const productMap = products.reduce((acc, product) => {
  acc[product.id] = { name: product.name };
  return acc;
}, {});

console.log(productMap);

