import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ProductList from "./components/products/ProductList";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<ProductList />} />
        <Route path="cart" element={<Cart />} /> {/* ✅ matches /cart */}
      </Route>
    </Routes>
  );
}

export default App;





