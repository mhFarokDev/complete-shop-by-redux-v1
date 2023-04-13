import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './pages/Product/Product';
import CreateProduct from './pages/Product/CreateProduct';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import Tag from './pages/Product/Tag';
import Category from './pages/Product/Category';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategory, getAllProduct, getAllTag } from './redux/product/action';
import Footer from './components/Header/Footer';
import Home from './pages/Home/Home';


function App() {
  const dispatch = useDispatch()


  useEffect(()=>{
    // pass dispatch to function
    dispatch(getAllProduct())
    dispatch(getAllCategory())
    dispatch(getAllTag())
  }, [dispatch])
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/admin/product' element={<Product/>}/>
      <Route path='/admin/product/create' element={<CreateProduct/>}/>
      <Route path='/admin/product/tags' element={<Tag/>}/>
      <Route path='/admin/product/categorys' element={<Category/>}/>
    </Routes>
    <Footer/>
      
    </>
  );
}

export default App;
