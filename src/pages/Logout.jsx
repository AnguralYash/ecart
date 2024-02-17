import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

const Logout = () => {
  const { isLoggedIn, setIsLoggedIn, cartCount, setCartCount } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    // setCartCount(null)
    setIsLoggedIn(false)
    localStorage.removeItem("token")
    localStorage.removeItem("cart")
    localStorage.clear()
    console.log(localStorage.getItem("token"))
    console.log(localStorage.getItem("cart"))

    // location.reload()
    navigate("/login")
    location.reload()
  }, [])
  return <h2>Logout</h2>
}

export default Logout
