import { createContext, useContext } from "react"
import { useState, useEffect } from "react"

const authContext = createContext()

const AuthProvider = ({ children }) => {
  // const [products, setProducts] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cartCount, setCartCount] = useState(null)
  const [cart, setCart] = useState([])
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")))
      setCartCount(JSON.parse(localStorage.getItem("cart")).length)
    }
  }, [])

  // console.log(cart.quantity)

  // useEffect(() => {
  //   async function getProducts() {
  //     const response = await fetch("https://dummyjson.com/products")
  //     console.log(response)
  //     if (response.ok) {
  //       const data = await response.json()
  //       // console.log(data)
  //       setProducts(data.products)
  //     } else {
  //       throw new Error("Something went wrong!!")
  //     }
  //     // if(response.status)
  //   }
  //   getProducts()
  // }, [])
  return (
    <authContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        cartCount,
        setCartCount,
        cart,
        setCart,
        userName,
        setUserName,
        password,
        setPassword,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export function useAuth() {
  return useContext(authContext)
}

export default AuthProvider
