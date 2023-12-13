import './App.css';
import HeaderConteiner from './components/HeaderConteiner/HeaderConteiner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';


function App() {

  return (

    <div className='appContainer'>
      <BrowserRouter>
        <HeaderConteiner />
        <Routes>
          <Route path='/' element={<ItemListConteiner/>}/>
          <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
          <Route path='/detail/:productId' element={<ItemDetailConteiner/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Routes>
          
        
      </BrowserRouter>

    </div>
  )
}

export default App
