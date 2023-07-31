import { useContext } from "react";
import CartContext from "../context/Context";

export const useCart = () => useContext(CartContext);