import React, { useState } from "react"
import { useEffect } from "react"
import { useAuth } from "../context/AuthProvider"
import { Navigate, useNavigate } from "react-router-dom"

import { toast } from "react-toastify"

const Login = () => {
  const [token, setToken] = useState("")
  const tempUser = ""

  const {
    isLoggedIn,
    setIsLoggedIn,
    userName,
    setUserName,
    password,
    setPassword,
  } = useAuth()
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    // console.log("Login!!!")
    // console.log(userName)
    // console.log(password)
    if (userName.trim().length === 0) {
      toast.error("Please enter username!", {
        autoClose: 1000,
        position: "bottom-right",
      })
      return
    }
    if (password.trim().length === 0) {
      toast.error("Please enter password!", {
        autoClose: 1000,
        position: "bottom-right",
      })
      return
    }
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
    const data = await response.json()
    // setToken(data.token)
    // console.log(data)
    if (data.message == "Invalid credentials") {
      toast.error("Invalid credentials!!", {
        autoClose: 1000,
        position: "bottom-right",
      })
      navigate("/login")
      return
    }
    setIsLoggedIn(true)
    // setUserName("")
    // setPassword("")
    // navigate("/home", { replace: true })
    localStorage.setItem("token", data.token)
    // console.log(data.token)
    toast.success("LoggedIn successfully", {
      autoClose: 1000,
      position: "bottom-right",
    })
    navigate("/home", { replace: true })

    // <Navigate to="/home" replace/>
  }
  // const guestuser = () => {
  //   setUserName("kminchelle")
  //   setPassword("0lelplR")
  // }
  // useEffect

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a> */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  username
                </label>
                <input
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value)
                  }}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div> */}
                {/* <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a> */}
              </div>
              <button
                onClick={handleLogin}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="./signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p> */}
              {/* <button
                onClick={guestuser}
                className="w-full  text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Get Guest Info
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
