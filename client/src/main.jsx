import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider.jsx'
import { CartContextProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <ShopContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ShopContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
)
