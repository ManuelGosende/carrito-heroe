import React from "react";
import { useModal } from "../hooks/useModal";

type ModalComponentProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
};

export const ModalComponent: React.FC<ModalComponentProps> = ({ setShowCart, closeModal }) => {

  const handleContinue = () => {
      closeModal();
      setShowCart(true);
  }

  return (
    <div className='modal is-open'>
      <div className='modal-container'>
        <button onClick={closeModal}>Volver al marketplace</button>
        <button onClick={handleContinue}>Continuar al carrito</button>
      </div>
    </div>
  );
}