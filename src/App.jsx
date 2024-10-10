
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ProductCategory from './pages/ProductCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignUp from './pages/LoginSignUp'
import Footer from './components/Footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
import ShopContextProvider from './components/Context/Context'
function App() {

  return (
    <>
    <ShopContextProvider>

    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ProductCategory banner={men_banner} category="men"/>}/>
    <Route path='/womens' element={<ProductCategory banner={women_banner}  category="women"/>}/>
    <Route path='/kids' element={<ProductCategory banner={kid_banner} category="kid"/>}/>
    <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}></Route>
    </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignUp/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </ShopContextProvider>

      </>
  )
}

export default App
