import React from "react";
import { useCart } from "../hooks/useCart";

type ModalComponentProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
};

export const ModalComponent: React.FC<ModalComponentProps> = ({ setShowCart, closeModal }) => {

  const { gems } = useCart();

  const handleContinue = () => {
      closeModal();
      setShowCart(true);
  }

  return (
    <div className='modal'>
      <div className='flex flex-col space-y-6 font-sans bg-stone-700 p-6 rounded-lg modal-container'>
        <h1 className='font-bold text-3xl'>Todavía podés utilizar { gems } { gems == 1 ? "Gema" : "Gemas" }</h1>
        <p className='text-stone-400 text-sm'>Para poder vencer al 🐉 es mejor contar con todas las pociones posibles.</p>
        <div className='flex flex-col space-y-4 text-center'>
          <h3>¿Qué deseas hacer?</h3>
          <div className='flex flex-row space-x-4 justify-around items-center'>
            <button
              className='w-full text-center bg-stone-300 p-2 rounded-full text-black text-sm'
              onClick={closeModal}
            >
              Volver al marketplace
            </button>
            <button
            className='w-full text-center bg-blue-700 p-2 rounded-full text-white text-sm'
              onClick={handleContinue}
            >
              Continuar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}