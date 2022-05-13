import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/container/ItemListContainer';
import ItemDetailContainer from '../components/container/ItemDetailContainer';
import Home from '../components/container/Home';
import NotFound404 from '../components/container/NotFound404';


const AppRouter = () => {
    return (
        <>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/servicios' element={<ItemListContainer/>} />
            <Route path='/servicios/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<NotFound404/>}/>
          </Routes>
        </BrowserRouter>
        </>
      );
}

export default AppRouter