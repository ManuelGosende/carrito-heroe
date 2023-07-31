import React, { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import { Product } from '../types/Product';
import { CardProductSelected } from './CardProductSelected';

type CartComponentProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartComponent: React.FC<CartComponentProps> = ({ setShowCart }) => {

  const [productsById, setProductsById] = useState<Product[]>([]);
  const [buySuccess, setBuySuccess] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const { itemsId, getProductsById, buyProducts } = useCart();

  useEffect(() => {
    const handleGetProductsById = async () => {
      try {
        const productsFiltered = await getProductsById(itemsId);
        setProductsById(productsFiltered);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    handleGetProductsById();

    itemsId.length > 0 ? setIsEmpty(false) : setIsEmpty(true)
  }, [itemsId]);

  const handleBuyProducts = async () => {
    try {
      const success = await buyProducts(itemsId);
      setBuySuccess(true);
      return success;
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  return (
    <div className='w-full flex flex-col space-y-6'>
      <div>
        <button
          className='text-center bg-purple py-1.5 px-3 buttonCustom'
          onClick={() => setShowCart(false)}
        >
          Volver
        </button>
      </div>

      { buySuccess ?
        <h1 className='font-semibold'>¡Compra realizada!</h1> :
        isEmpty ?
          <h1 className='font-semibold'>No tienes ninguna poción seleccionada.</h1> :
          <div className='bg-stone-700 divide-y divide-stone-400'>
            {productsById.map((product, key) => (
              <CardProductSelected
                key={key}
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category} 
                image={product.image}
              />
            ))}
          </div>
      }

      <button
        className={`p-1.5 buttonCustom
        ${isEmpty || buySuccess ? 'bg-stone-500' : 'bg-purple'}`}
        onClick={handleBuyProducts}
        disabled={isEmpty || buySuccess}
      >
        Comprar
      </button>
    </div>
  );
};
