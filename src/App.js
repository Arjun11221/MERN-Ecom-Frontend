import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/> ,
  },
  {
    path: "/signup",
    element: <SignupPage/> ,
  },
  {
    path: "/cart",
    element: <CartPage/> ,
  },
  {
    path: "/checkout",
    element: <Checkout/> ,
  },
]);



function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
