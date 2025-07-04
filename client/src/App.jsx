import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import DetailPage from './components/DetailPage'


const router = createBrowserRouter([
  {
    path : "/",
    element: <> <Navbar/> <Home/><Footer/> </>
  },
  {
    path : "/men",
    element: <> <Navbar/><Men/><Footer/> </>
  },
  {
    path : "/women",
    element: <> <Navbar/> <Women/><Footer/> </>
  },
  {
    path : "/kids",
    element: <> <Navbar/> <Kids/><Footer/> </>
  },
  {
    path : "/login",
    element: <>< Navbar /> <Login/><Footer/> </>
  },
  {
    path : "/cart",
    element: <>< Navbar /> <Cart/><Footer/> </>
  },
  {
    path : "/product/:productId",
    element : <>< Navbar /><DetailPage/><Footer/></>
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
