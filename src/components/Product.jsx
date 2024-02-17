import React from "react"
import { toast } from "react-toastify"
import { useAuth } from "../context/AuthProvider"
import styles from "./Product.module.css"

const Product = ({ id, title, description, price, images }) => {
  const { cartCount, setCartCount, cart, setCart } = useAuth()
  const handleCart = () => {
    // console.log(Array.isArray(cart))
    if (cart.length === 0) {
      const newCartItem = {
        id: id,
        title: title,
        price: price,
        description: description,
        img: images[0],
        quantity: 1,
        // quantity: 1,
      }
      toast.info("item added to cart!", {
        position: "bottom-right",
        autoClose: 1000,
      })
      // const newObj = {}
      setCartCount(cartCount + 1)
      let tmp = []
      tmp.push(newCartItem)
      // console.log(JSON.stringify(tmp))
      localStorage.setItem("cart", JSON.stringify(tmp))
      // console.log(JSON.parse(localStorage.getItem("cart")))
      setCart(tmp)
      return
      // console.log("Cart", cartCount)
    }
    // console.log(cart)
    for (let item of cart) {
      if (item.id === id) {
        toast.error("Item already added!!", {
          autoClose: 1000,
          hideProgressBar: true,
          position: "bottom-right",
        })
        // setCartCount(cartCount + 1)
        return
      }
    }
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      description: description,
      img: images[0],
      quantity: 1,
    }
    toast.info("item added to cart!", {
      position: "bottom-right",
      autoClose: 1000,
    })
    let tmp = cart
    tmp.push(newCartItem)
    setCartCount(cartCount + 1)
    // if(localStorage.getItem("cart"))
    // {
    //   let cart=localStorage.getItem("cart");
    //   cart.push(tmp)
    // }
    setCart(tmp)
    localStorage.setItem("cart", JSON.stringify(tmp))
    // console.log(JSON.parse(localStorage.getItem("cart")))
  }

  return (
    <>
      <div
        // style={{
        //   border: "1px solid black",
        //   margin: "1rem auto",
        //   padding: "1rem",
        // }}
        className="product"
      >
        {/* <h1>{id}</h1> */}
        <img src={images[0]} alt="img not found" className="product-image" />
        <p className="product-title">{title}</p>
        <p className="product-desc">{`${description.slice(0, 70)}...`}</p>
        <p className="product-price">&#8377;{price}</p>
        <button onClick={handleCart} className="product-btn">
          Add to cart
        </button>
      </div>

      {/* <div className={styles.product}>
      <p>id:{id}</p>
      <img
        src={images[0]}
        alt="img not found"
        className={styles.productImage}
       />
       <p className={styles.title}>{title}</p>
       <p className={styles.price}>&#8377;{price}</p>

     <button onClick={handleCart} className={styles.addToCartBtn}>
         Add to cart
     </button>
     </div> */}
    </>
  )
}

export default Product
