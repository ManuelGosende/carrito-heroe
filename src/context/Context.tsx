import { ReactNode, createContext, useState } from 'react';
import { Product } from '../types/Product';

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
  getProductsById: (itemsId: number[]) => Promise.resolve([]),
  buyProducts: (itemsId: number[]) => Promise.resolve(),
  addProduct: (id: number, price: number, category: string) => {},
  deleteProduct: (id: number, price: number, category: string) => {},
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

  const getProductsById = async (itemsId: number[]) => {
    try {
      const response = await fetch('http://localhost:3001/productos');
      const data = await response.json();
      const productsById = data.filter((product: Product) => itemsId.includes(product.id));
      return productsById;
    } catch (error) {
      console.error('Error al obtener productos por ID:', error);
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
      setState(initialState);
      return data;
    } catch (error) {
      console.error('Error al comprar productos:', error);
      return [];
    }
  };

  const addProduct = (id: number, price: number, category: string) => {
    setState({
      gems: state.gems - price,
      items: state.items + 1,
      categories: [...state.categories, category],
      itemsId: [...state.itemsId, id],
    });
  };

  const deleteProduct = (id: number, price: number, category: string) => {
    setState({
      gems: state.gems + price,
      items: state.items - 1,
      categories: state.categories.filter((cat) => cat !== category),
      itemsId: state.itemsId.filter((item) => item !== id),
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        getProducts,
        getProductsById,
        buyProducts,
        addProduct,
        deleteProduct
      }}
    >
      {children}
    </CartContext.Provider> 
  );
};

export default CartContext;