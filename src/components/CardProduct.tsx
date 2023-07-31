import React, { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { useCart } from '../hooks/useCart';

export const CardProduct: React.FC<Product> = ({ id, name, price, category, description, image }) => {

  const { gems, categories, itemsId, addProduct } = useCart();
  const [isValidProduct, setIsValidProduct] = useState(true);

  useEffect(() => {
    const validateProduct = () => {
      if (gems < price || categories.includes(category) || itemsId.includes(id)) {
        setIsValidProduct(false);
      } else {
        setIsValidProduct(true);
      }
    };

    validateProduct();
  }, [gems, categories, itemsId]);

  const handleAddProduct = () => {
    addProduct(id, price, category);
  }

  return (
    <div className='flex flex-col bg-stone-700 rounded-lg p-4 justify-start cardCustom'>
      <div className='flex w-full justify-end'>
        <div className='w-1/3 text-center bg-green p-1 rounded-full text-white text-xs'>
          { price } { price == 1 ? "Gema" : "Gemas" }
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <img src={ image } className='w-1/3'/>
      </div>
      <div className='flex flex-col space-y-3.5 p-5'>
        <h2 className='font-bold leading-none'>{ name }</h2>
        <p className='text-stone-400 text-sm'>{ description }</p>
        <button
          className={`w-full p-1 font-semibold buttonCustom
          ${isValidProduct ? 'bg-purple' : 'bg-stone-500'}`}
          onClick={handleAddProduct}
          disabled={!isValidProduct}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};