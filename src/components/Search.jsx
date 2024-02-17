// import React, { useState } from "react"
// import { IoSearch } from "react-icons/io5"
// import { useEffect } from "react"
// const Search = ({ products, setProducts }) => {
//   const [search, setSearch] = useState("")
//   const [copyProducts, setCopyProducts] = useState([])

//   useEffect(() => {
//     setCopyProducts(products)
//   }, [products])

//   const handleClick = () => {
//     const searchQuery = search.trim().toLowerCase()
//     const searchProducts = copyProducts.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery)
//     )

//     if (searchQuery === "") {
//       setProducts(copyProducts)
//     } else {
//       setProducts(searchProducts)
//     }

//     setSearch("")
//   }

//   return (
//     <div className="search-bar container">
//       <input
//         type="text"
//         name="search"
//         id="search"
//         placeholder="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button onClick={handleClick}>
//         <IoSearch className="search-icon" />
//       </button>
//     </div>
//   )
// }

// export default Search
