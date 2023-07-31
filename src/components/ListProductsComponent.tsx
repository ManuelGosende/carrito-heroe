import { useEffect, useState } from 'react';
import { CardProduct } from './CardProduct';
import { Product } from '../types/Product';
import { useCart } from '../hooks/useCart';

export const ListProductsComponent = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const { getProducts } = useCart();

  useEffect(() => {
    const handleGetProducts = async () => {
      try {
        const allProducts = await getProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    handleGetProducts();
  }, []);

  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-4 font-sans'>
      {products.map((product, key) => (
        <CardProduct
          key={key}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
};