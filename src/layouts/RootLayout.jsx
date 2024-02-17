import React, { useState, useEffect } from "react"
import { useAuth } from "../context/AuthProvider"
import { Outlet, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const RootLayout = () => {
  // const { isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const { isLoggedIn, setisLoggedIn, cartCount } = useAuth()
  const tempToken = localStorage.getItem("token")
  // console.log(tempToken)

  useEffect(() => {
    let token = localStorage.getItem("token")
    // console.log(token)
    if (token) {
      // setisLoggedIn(true)
      navigate("/home")
    } else {
      navigate("/login")
    }
  }, [])

  return (
    <div>
      {/* <h1>Nav</h1> */}
      <ToastContainer />
      <nav className="container">
        <div className="nav-logo">
          <h2 className="main-heading">E-commerce</h2>
        </div>
        <div className="nav-items">
          <ul>
            <li className="nav-item">
              <NavLink to="willowy-entremet-fca434.netlify.app/home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              {tempToken ? (
                <NavLink to="willowy-entremet-fca434.netlify.app/logout">
                  Logout
                </NavLink>
              ) : (
                <NavLink to="willowy-entremet-fca434.netlify.app/login">
                  Login
                </NavLink>
              )}
            </li>
            {tempToken && (
              <li>
                <NavLink to="willowy-entremet-fca434.netlify.app/cart">
                  <div className="nav-item-cart">
                    <span>
                      <FaShoppingCart />
                      {cartCount > 0 && (
                        <span className="cart-cnt">{cartCount} </span>
                      )}
                    </span>
                    <span>cart</span>
                  </div>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <hr />
      <Outlet />
    </div>
  )
}

export default RootLayout
