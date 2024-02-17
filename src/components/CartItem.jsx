import React from "react"
import { useAuth } from "../context/AuthProvider"
import { RxCross2 } from "react-icons/rx"
import { GoPlus } from "react-icons/go"
import { AiOutlineMinus } from "react-icons/ai"
import styles from "./CartItem.module.css"
import { toast } from "react-toastify"

const CartItem = ({ id, title, price, img }) => {
  const { cart, setCart, setCartCount } = useAuth()

  const removeItem = () => {
    // console.log("item removed")
    toast.success("Item removed successfully!!", {
      autoClose: 1000,
      position: "bottom-right",
    })
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
    setCartCount((prevState) => prevState - 1)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  // const decreaseQty = () => {
  //   console.log("quantity decreased")
  // }
  // const increaseQty = () => {
  //   console.log("increase quantity")
  //   console.log(cart)
  // }
  return (
    // <>
    //   <div
    //     style={{ border: "1px solid black", margin: "1rem", padding: "1rem " }}
    //   >
    //     <h2>id:{id}</h2>
    //     <p>title:{title}</p>
    //     <p>price:&#8377;{price}</p>
    //   </div>
    // </>

    <>
      <div className={`${styles.cartItem} container`}>
        {/* left div  */}
        <div className={styles.imgAndTitle}>
          <div className={styles.imgContainer}>
            <img src={img} alt={title} className={styles.cartImage} />
          </div>
          <h3>{title}</h3>
        </div>

        {/* right div  */}
        <div className={styles.otherItems}>
          {/* <div className={styles.qtyInput}>
            <button>
              <AiOutlineMinus
                onClick={() => {
                  // if (quantity === 1) {
                  //   // alert("Quantity cant be -ve")
                  //   return
                  // }
                  decreaseQty(id)
                }}
              />
            </button>
            {/* <span className={styles.cartQuantity}>{quantity}</span> */}
          {/* <button>
              <GoPlus onClick={() => increaseQty(id)} />
            </button>
          </div>  */}

          <p>
            <span>Price </span>&#8377;{price}
          </p>
          <button className={styles.removeBtn} title="remove item">
            <RxCross2 onClick={() => removeItem(id)} />
          </button>
        </div>
      </div>
    </>
  )
}

export default CartItem
