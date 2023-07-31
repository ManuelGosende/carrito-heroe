import { ReactNode, createContext, useReducer, useState } from 'react';

export type CartState = {
  gems: number,
  items: number,
  categories: string[],
  itemsId: number[]
};

const initialState: CartState = {
  gems: 3,
  items: 0,
  categories: [],
  itemsId: []
};

const CartContext = createContext({
  ...initialState,
  getProducts: () => Promise.resolve([]),
  buyProducts: (itemsId: number[]) => Promise.resolve(),
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {

  const [state, setState] = useState(initialState);

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/productos');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      return [];
    }
  };

  const buyProducts = async (itemsId: number[]) => {
    try {
      const response = await fetch('http://localhost:3001/compras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemsId }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al comprar productos:', error);
      return [];
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        getProducts,
        buyProducts
      }}
    >
      {children}
    </CartContext.Provider> 
  );
};

export default CartContext;