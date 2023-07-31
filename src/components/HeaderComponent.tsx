import React from "react";
import { useCart } from "../hooks/useCart";

type HeaderComponentProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ setShowCart }) => {

  const { gems, items } = useCart();

  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img src="./gem.png" />
        <span>{ gems } Gemas</span>
      </div>
      <button
        className="text-white hover:underline"
        onClick={() => setShowCart(true)}
      >
        Ver Carrito ({ items })
      </button>
    </div>
  );
};
