import React from "react"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import AuthProvider from "./context/AuthProvider"
import RequiresAuth from "./components/RequiresAuth"
import Cart from "./pages/Cart"
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom"

import RootLayout from "./layouts/RootLayout"
import Logout from "./pages/Logout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      exact
      path="/"
      element={<RootLayout />}
    >
      <Route
        exact
        path="/login"
        element={<Login />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/cart"
        element={<Cart />}
      />
      <Route
        path="/logout"
        element={<Logout />}
      />
    </Route>
    // <Route>
    //   <Route exact path="/" element={<RootLayout />} />
    //   <Route exact path="/" element={<Home />} />
    //   <Route exact path="/login" element={<Login />} />
    // </Route>
  )
)

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
