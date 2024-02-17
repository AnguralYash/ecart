import React from "react"
import { Navigate } from "react-router-dom"

import { useAuth } from "../context/AuthProvider"

const RequiresAuth = ({ children }) => {
  const { isloggedIn } = useAuth()
  if (isloggedIn) {
    return children
  } else {
    return <Navigate to="/" replace />
  }
}

export default RequiresAuth
