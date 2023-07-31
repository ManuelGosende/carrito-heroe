import { useEffect, useState } from "react";
import { CartComponent } from "./components/CartComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListProductsComponent } from "./components/ListProductsComponent";
import { useCart } from "./hooks/useCart";

function App() {

  const [products, setProducts] = useState([]);
  const { getProducts } = useCart();

  const handleGetProducts = async () => {
    try {
      const allProducts = await getProducts();
      setProducts(allProducts);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  const [showCarrito, setShowCarrito] = useState(false);
  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
          {showCarrito ? <CartComponent /> : <ListProductsComponent products={products} />}
        </div>
      </div>
    </div>
  );
}

export default App;
