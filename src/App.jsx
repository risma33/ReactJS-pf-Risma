import './App.css';
import HeaderConteiner from './components/HeaderConteiner/HeaderConteiner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView/CartView';
import { NotificationProvider } from './notificaciones/NotificationService';
import Checkout from './components/Checkout.jsx/Checkout';
import ProductToupdate from './components/ProductToUpdate/productsToUpdate';




function App() {


  return (

    <div className='appContainer'>
       <NotificationProvider>
      <BrowserRouter>
        <CartProvider>
          <HeaderConteiner />
          <Routes>
            <Route path='/' element={<ItemListConteiner />} />
            <Route path='/category/:categoryId' element={<ItemListConteiner />} />
            <Route path='/detail/:productId' element={<ItemDetailConteiner />} />
            <Route path='/cart' element={<CartView />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/productToUpdate' element={<ProductToupdate />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </CartProvider>

      </BrowserRouter>
      </NotificationProvider>

    </div>
  )
}

export default App
