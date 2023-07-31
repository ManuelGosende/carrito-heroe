import React from 'react';
import { useCart } from '../hooks/useCart';

interface CardProductSelectedProps {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

export const CardProductSelected: React.FC<CardProductSelectedProps> = ({ id, name, price, category, image }) => {

  const { deleteProduct } = useCart();

  const handleDeleteProduct = () => {
    deleteProduct(id, price, category);
  }

  return (
    <div className='flex flex-row py-2 px-4 justify-between items-center'>
      <div className='bg-stone-500 rounded-full'>
        <img src={ image } />
      </div>
      <h3 className='font-regular leading-none'>{ name }</h3>
      <button
        className='text-stone-500'
        onClick={handleDeleteProduct}
      >
        X
      </button>
    </div>
  );
};