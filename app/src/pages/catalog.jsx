import './catalog.css';
import Product from '../components/product';

const categories = ['Fruit', 'Vegetable', 'Dairy & Eggs', 'Beverages'];

const data = [
  {
    _id: '1',
    price: 12.32,
    title: 'Cabbage',
    image: 'img-1.jpg',
    category: 'Vegetable',
  },
  {
    _id: '2123sxw12312',
    price: 22.71736734,
    title: 'Strawberry',
    image: 'product-6.jpg',
    category: 'Fruit',
  },
  {
    _id: 'asvdooy123',
    price: 32.0,
    title: 'Bell pepper',
    image: 'img-14.jpg',
    category: 'Vegetable',
  },
  {
    _id: '4',
    price: 6.99,
    title: 'Carrot',
    image: 'img-4.jpg',
    category: 'Vegetable',
  },
  {
    _id: '5',
    price: 16.39,
    title: 'Banana',
    image: 'img-5.jpg',
    category: 'Fruit',
  },
  {
    _id: '6',
    price: 14.0,
    title: 'Orange',
    image: 'product-10.jpg',
    category: 'Fruit',
  },
  {
    _id: '7',
    price: 12.0,
    title: 'Egg',
    image: 'img-15.jpg',
    category: 'Dairy & Eggs',
  },
  {
    _id: '8',
    price: 19.7,
    title: 'Orange Juice',
    image: 'product-15.jpg',
    category: 'Beverages',
  },
];

function Catalog() {
  return (
    <div className="catalog">
      {' '}
      <h1>Check our amazing catalog!</h1>
      <div className="filters">
        {categories.map((cat) => (
          <button className="btn btn-sm btn-success">{cat}</button>
        ))}
      </div>
      {data.map((prod) => (
        <Product info={prod} />
      ))}
    </div>
  );
}

export default Catalog;
