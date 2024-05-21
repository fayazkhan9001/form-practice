import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Layout from './pages/Layout';
import { useEffect, useState } from 'react';
import EditContact from './pages/EditContact';
import Contact from './pages/Contact';
import ContactMsg from './pages/ContactMsg';
import Register from './pages/Register';
import RegUpdate from './pages/RegUpdate';








const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/edit/:id' element={<EditContact />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/contactMsg/:id' element={<ContactMsg />} />
      <Route path='/register' element={<Register />} />
      <Route path='/regupdate/:id' element={<RegUpdate />} />
      
    </Route>
  )
);

function App() {


  
 
  return (
    <div>

  
     <RouterProvider router={router}/>
    </div>
   
  )
}

export default App
