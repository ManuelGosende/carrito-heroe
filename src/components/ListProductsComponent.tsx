import React from 'react';
import { CardProduct } from './CardProduct';
import { Product } from '../types/Product';

type ListProductsProps = {
  products: Product[];
};

export const ListProductsComponent: React.FC<ListProductsProps> = ({ products }) => {

  return (
    <div
      className='grid grid-cols-2 gap-x-4 gap-y-4 font-sans'
    >
      {products.map((product) => (
        <CardProduct
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