import React, { useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Axios from "axios";

// Components
// import CartItem from "../components/CartItem";

// Actions

import { removeCartItem } from "../features/cartItemsSlice";
import {
  createCartItem,
  createFinalCart,
  getCartItems,
} from "../features/cartItemsSlice";
import { selectUser } from "../features/userSlice";
import Navbar from "./Navbar";
import Hoverbar from "./Hoverbar";

const CartScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [finalAmount, setFinalAmount] = useState();

  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;
  const finalCartProducts = useSelector(getCartItems);

  // useEffect(() => {}, []);

  const removeHandler = (id) => {
     dispatch(removeCartItem(id));
  };

  const getCartCount = () => {
    return finalCartProducts.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return finalCartProducts
      .reduce((price, item) => price + item.itemPrice * item.qty, 0)
      .toFixed(2);

    // setFinalAmount(finalPrice);
    // return finalPrice;
  };

  const handleCheckOut = () => 
  {
    console.log(finalCartProducts);
    console.log(Date.now());

    finalCartProducts.map((product) => {
        
      console.log("---------- product.itemDescription -----------");

      console.log(product.itemDescription);

      console.log("-----------------------------------------------");


      Axios.post("http://127.0.0.1:4001/storePurchaseItems/" , {
        id:user.id,
        itemId: product.itemId,
        itemOrderId:Date.now(),
        itemName: product.itemName,
        itemImage : product.itemImage, 
        itemQuantity : product.qty,
        itemDescription : product.itemDescription,
        itemPrice: product.itemPrice,
        itemCount: product.itemCount,
        itemOrderMsg : product.giftMsg,
      }).then(
        (response) => {
          console.warn(response);
          if (response.data.message === "success") {
            console.log("purchase uploaded successfully !");
          }
        }
      );
    });

    finalCartProducts.map((product) => {
      removeHandler(product.itemId);

      Axios.post(`/editCount/${product.itemId}`, { quantity: product.qty })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    window.location.pathname = "/purchase";

  };

  return (
    <>
      <Navbar />
      <Hoverbar />
      <hr></hr>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {finalCartProducts.length === 0 ? (
            <div>
              no items present <Link to="/">Go Back</Link>
            </div>
          ) : (
            finalCartProducts.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                getCartSubTotal={getCartSubTotal}
                getCartCount={getCartCount}
                // qtyChangeHandler={qtyChangeHandler}
                // removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
        <div className="cartscreen__right" style={{ width: "30%" }}>
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button
              style={{ backgroundColor: "orange" }}
              onClick={() => {
                handleCheckOut();
                // item.itemId,
                // item.itemImage,
                // item.itemName,
                // item.itemPrice,
                // item.qty
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
