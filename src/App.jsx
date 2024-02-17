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
      path="willowy-entremet-fca434.netlify.app/"
      element={<RootLayout />}
    >
      <Route
        exact
        path="willowy-entremet-fca434.netlify.app/login"
        element={<Login />}
      />
      <Route
        path="willowy-entremet-fca434.netlify.app/home"
        element={<Home />}
      />
      <Route
        path="willowy-entremet-fca434.netlify.app/cart"
        element={<Cart />}
      />
      <Route
        path="willowy-entremet-fca434.netlify.app/logout"
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
