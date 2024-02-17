import React from "react"
import CartItem from "../components/CartItem"
import { useAuth } from "../context/AuthProvider"

const Cart = () => {
  const { cartCount, cart } = useAuth()
  // const { cart } = useAuth()
  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.price
  }, 0)
  return (
    <>
      <div className="container">
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            fontFamily: "arial",
            // border: "1px solid red",
            // borderBottom: "1px solid black",
            // minHeight: "100px",
            maxWidth: "1350px",
            width: "90%",
            margin: "2rem auto",
          }}
        >
          Cart
        </h1>
        <div>
          {cart.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
          {cart.length === 0 ? (
            <h1
              style={{
                fontSize: "1.8rem",
                fontFamily: "arial",
                // border: "1px solid red",
                marginTop: "6rem",
                maxWidth: "1350px",
                width: "90%",
                margin: "3rem auto",
              }}
            >
              Cart is empty..
            </h1>
          ) : (
            <h1
              style={{
                fontSize: "1.8rem",
                fontFamily: "arial",
                fontWeight: "600",
                // border: "1px solid red",
                maxWidth: "1350px",
                width: "90%",
                margin: "3rem auto",
              }}
            >
              Total amount : {totalAmount}
            </h1>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
