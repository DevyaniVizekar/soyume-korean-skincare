import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { About, Journal } from './pages/Editorial';
import { StoreProvider } from './context/CartContext';
export default function App() { return <StoreProvider>
<BrowserRouter>
<Routes>
<Route element={<Layout />}>
<Route path="/" element={<Home />}/>
<Route path="/shop" element={<Shop />}/>
<Route path="/product/:id" element={<Product />}/>
<Route path="/cart" element={<Cart />}/>
<Route path="/about" element={<About />}/>
<Route path="/journal" element={<Journal />}/>
<Route path="*" element={<Home />}/>
</Route>
</Routes>
</BrowserRouter>
</StoreProvider>; }
