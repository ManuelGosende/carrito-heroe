import { useState } from "react";
import { CartComponent } from "./components/CartComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListProductsComponent } from "./components/ListProductsComponent";

function App() {

  const [showCart, setShowCart] = useState(false);

  return (
    <div
      className="min-h-full bg-fixed"
      style={{ backgroundImage: "url(background.webp)" }}
    >
      <HeaderComponent setShowCart={setShowCart} />
      <div className="flex justify-center min-h-full">
        <div className="max-w-lg w-full py-16">
          {showCart ? <CartComponent setShowCart={setShowCart} /> : <ListProductsComponent />}
        </div>
      </div>
    </div>
  );
}

export default App;
