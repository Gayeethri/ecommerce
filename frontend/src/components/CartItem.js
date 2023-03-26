import "./CartItem.css";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFinalCart, removeCartItem } from "../features/cartItemsSlice";
import { Delete } from "@material-ui/icons";
import Axios from "axios";
import { selectUser } from "../features/userSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const qtyChangeHandler = (qty) => {    

    dispatch(
      createFinalCart({
        itemId: item.itemId,
        itemName: item.itemName,
        itemDescription: item.itemDescription,
        itemImage: item.itemImage,
        itemPrice: item.itemPrice,
        itemCount: item.itemCount,
        qty: Number(qty),
        giftMsg : "",
      })
    );

    if( qty == 0 )
    {
      removeHandler( item.itemId );
    }
    //window.location.reload(true);
  };

  const addGiftMsg = (msg) => {
    dispatch(
      createFinalCart({
        itemId: item.itemId,
        itemName: item.itemName,
        itemDescription: item.itemDescription,
        itemImage: item.itemImage,
        itemPrice: item.itemPrice,
        itemCount: item.itemCount,
        qty: item.qty,
        giftMsg : msg,
      })
    );
  };

  const removeHandler = (id) =>
  {
    dispatch(removeCartItem(id));
  };

  return(
    <div
      className="cart_pag"
      style={{
        display: "flex",
        width: "100%",
        // backgroundColor: "green",
        height: "200px",
      }}
    >
      <div className="cartitem">
        <div className="cartitem__image">
          <img
            src={require("../Images/" + item.itemImage)}
            alt={item.itemName}
            width={150}
            height={100}
          />
        </div>
        <Link to={`/product/${item.product}`} className="cartItem__name">
          <p>{item.itemName}</p>
        </Link>
        <p className="cartitem__price">${item.itemPrice}</p>
        <select
          value={item.qty}
          onChange={(e) => qtyChangeHandler(e.target.value)}
          className="cartItem__select"
        >
          {[...Array(item.itemCount).keys()].map((x) => 
          (
            <option key={x } value={x}>
              {x }
            </option>
          ))}
        </select>
        <button
          className="cartItem__deleteBtn"
          onClick={() => removeHandler(item.itemId)}
        >
          <Delete />
        </button>

        <br></br>
        <label> Include gift message : </label>
        <input
              type="text"
              className="gift_msg"
              id="gift_msg"
              style={{borderRadius: '5px', paddingLeft: '10px', marginLeft: '-60px', width: '210px'}}
              placeholder="Gift Message !"
              onChange={(e) => addGiftMsg(e.target.value)}
              required
            />

      </div>
    </div>
  );
};

export default CartItem;
