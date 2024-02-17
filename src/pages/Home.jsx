import React from "react"
import { useEffect, useState } from "react"
import Product from "../components/Product"
import { useAuth } from "../context/AuthProvider"
// import Search from "../components/Search"
import { useNavigate } from "react-router-dom"
// import { Toast } from "react-toastify/components"
import { IoSearch } from "react-icons/io5"
import { toast } from "react-toastify"

const Home = () => {
  const [products, setProducts] = useState([])
  const [productsCopy, setProductsCopy] = useState([])
  const [search, setSearch] = useState("")
  const [first, setfirst] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { isLoggedIn, setIsLoggedIn, loginToken, setLoginToken } = useAuth()
  const navigate = useNavigate()

  const handleFilter = (ev) => {
    ev.preventDefault()
    // console.log(ev.target.value)

    if (ev.target.value === "default") {
      // if (first === " ") setfirst("")
      // else setfirst(" ")
      setProducts((prevState) => {
        return prevState.sort((a, b) => {
          return a.id - b.id
        })
      })
      setfirst(!first)
      // console.log(productsCopy)
      return
    }
    if (ev.target.value === "highToLow") {
      // console.log("dfvfd")
      // products.sort((a, b) => {

      setProducts((prevState) => {
        return prevState.sort((a, b) => {
          return b.price - a.price
        })
      })
      setfirst(!first)

      // console.log(products)
      return
    }
    if (ev.target.value === "lowToHigh") {
      setProducts((prevState) => {
        return prevState.sort((a, b) => {
          return a.price - b.price
        })
      })
      // if (first === " ") setfirst("")
      // else setfirst(" ")
      setfirst(!first)
      // console.log(products)
      return
    }
  }
  // useEffect(() => {
  //   let token = localStorage.getItem("token")
  //   if (!token) {
  //     navigate("/login")
  //     setIsLoggedIn(false)
  //   }
  // }, [])
  useEffect(() => {
    let token = localStorage.getItem("token")
    if (!token) {
      setIsLoggedIn(false)
      navigate("/login")
    }
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/products")
      // console.log(response.json())
      if (response.ok) {
        const data = await response.json()
        // console.log(data)
        setProducts(data.products)
        setProductsCopy(data.products)
        // setIsLoggedIn(true)
      } else {
        throw new Error("Something went wrong!!")
      }
      // if(response.status)
    }
    getProducts()
    setIsLoading(false)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // setSearch(e.target.value)
    // console.log("Search")
    const copyProducts = [...productsCopy]
    if (!search) {
      // alert("Enter some text to search")
      toast.error("Enter some text!!", {
        position: "bottom-right",
        autoClose: 1000,
      })
      setProducts(productsCopy)
      navigate("/home")
    }

    // console.log(copyProducts)
    const searchedProducts = copyProducts.filter((product) => {
      if (product.title.toLowerCase().includes(search.toLowerCase())) {
        return product
      }
    })

    if (searchedProducts.length === 0) {
      // alert("No items found!!")
      toast.error("No items found!!", {
        position: "bottom-right",
        autoClose: 1000,
      })

      setSearch("")
      return
    }

    if (search.trim() === "") {
      setProducts(productsCopy)
      return
    }

    setProducts(searchedProducts)
    setSearch("")
  }

  return (
    <>
      <div className="parent-container">
        <div className="search-bar">
          <form className="search-container">
            <input
              className="search-input"
              type="text"
              name="search"
              id="search"
              placeholder="enter name to search.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="search-icon"
              onClick={handleSearch}
              type="submit"
            >
              <IoSearch className="search-icon-main" />
            </button>
          </form>
        </div>
        {/* <div className="searchbar-btn"></div> */}

        <div className="filter">
          <select onClick={(e) => handleFilter(e)} className="filter-items">
            <option value="default">default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      <div className="products-container">
        <h1 style={{ display: "none" }}>{first}</h1>

        {!productsCopy.length ? (
          <h1
            style={{ fontSize: "2rem", fontWeight: "400", marginTop: "6rem" }}
          >
            Loading...please wait...
          </h1>
        ) : (
          products.map((product) => (
            <Product
              {...product}
              key={product.id}
              className="products-container"
            />
          ))
        )}
        {/* {products &&
          } */}
      </div>
    </>
  )
}

export default Home
