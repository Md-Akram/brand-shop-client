import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Root from './components/Root.jsx'
import AddProduct from './components/AddProduct.jsx'
import MyCart from './components/MyCart.jsx'
import Login from './components/Login.jsx'
import { AuthProvider } from './hooks/AuthProvider.jsx'
import { Register } from './components/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='addProduct' element={<AddProduct />} />
      <Route path='myCart' element={<MyCart />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
