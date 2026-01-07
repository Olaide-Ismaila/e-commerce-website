import {useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPage from "./pages/OrderPage";
import TrackingPage from "./pages/TrackingPage"; 
import { CartItemProps, ProductProps } from './data/TypesProps';

function App() {
   const [cart, setCart] = useState<CartItemProps[]>([]);  
   const [quantity, setQuantity] = useState<number>(0);
    const [totalQty, setTotalQty] = useState<number>(0);
  
    const addToCart = (product: ProductProps)=> {
      setTotalQty(prevQty => prevQty + quantity);
      setCart((prevCart) => {
        const newItem = prevCart.find(item => item.id === product.id);
  
        if (newItem) {
          return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item);
        }
         
        return [...prevCart, {...product, quantity: quantity}];
        
      });
    };

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage addToCart={addToCart} setQuantity={setQuantity} totalQty={totalQty} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} totalQty={totalQty} />} />
      <Route path="/order" element={<OrderPage />}  />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;