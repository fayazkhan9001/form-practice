import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Layout from './pages/Layout';
import { useEffect, useState } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
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
