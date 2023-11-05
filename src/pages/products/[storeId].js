import { useRouter } from 'next/router';
import Image from 'next/image';
//import { StoreImages, CategoriesImages } from '../../public';

const storeData = {
  storeA: {
    name: '7 Eleven',
    description: 'Your one-stop shop for groceries, alcohol, and convenience items.',
    products: [
      { id: 1, name: 'Milk', price: 2.99 },
      { id: 2, name: 'Chips', price: 1.49 },
      { id: 3, name: 'Beer', price: 5.99 },
    ],
  },
  storeB: {
    name: 'Costco',
    description: 'Buy in bulk! Groceries, alcohol, and wholesale goods.',
    products: [
      { id: 1, name: 'Toilet Paper (12-pack)', price: 14.99 },
      { id: 2, name: 'Frozen Pizza', price: 9.99 },
    ],
  },
  // Add data for more stores as needed
};

export default function StorePage() {
  const router = useRouter();
  const { store } = router.query;

  const storeInfo = storeData[store];

  if (!storeInfo) {
    return <div>Store not found</div>;
  }

  return (
    <div className="bg-campus-background p-4 md:p-8 lg:p-10">
      <h1 className="text-2xl md:text-3xl font-noto_serif">{storeInfo.name}</h1>

      <div>
        <p>{storeInfo.description}</p>

        <h2 className="text-lg font-medium mt-4">Products:</h2>
        <ul>
          {storeInfo.products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
