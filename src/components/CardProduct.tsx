import React from 'react';
import { Product } from '../types/Product';

export const CardProduct: React.FC<Product> = ({ id, name, price, category, description, image }) => {

  return (
    <div
      className='flex flex-col bg-stone-700 rounded-lg p-4 justify-center'
    >
      <div
        className='flex w-full justify-end'
      >
        <div className='w-1/3 text-center bg-green p-2 rounded-lg text-white text-xs'>
          { price } { price == 1 ? "Gema" : "Gemas" }
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <img src={image} className='w-1/3' />
      </div>
    </div>
  );
};