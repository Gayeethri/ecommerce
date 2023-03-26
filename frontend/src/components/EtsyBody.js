import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import
{
  favouritesList,
  getAllFavourites,
  getAllItems,
  getAllProducts,
  getProducts,
  updateFavourites,
} from "../features/productsSlice";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { selectUser } from "../features/userSlice";
import { Link } from "react-router-dom";
import { productOverview } from "../features/cartSlice";
import ProductOverView from "./ProductOverView";
import styled from "styled-components";

function EtsyBody() {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const products = useSelector(getAllProducts);
  const user = useSelector(selectUser);
  // const favourites = useSelector(getAllFavourites);
  // const product = useSelector(getProducts);
  // const getAllItemsFromItems = useSelector(getAllItems);
  const [favourites, setFavourites] = useState([]);
  const [items, SetItems] = useState([]);
  const [favouriteIcon, setFavoutriteIcon] = useState(false);
  // const [productOverview, setProductOverview] = useState(false);

  useEffect(() => {
    getItems();
    // getFavourites();
  }, []);

  const getItems = () => {
    Axios.get("/api/products/getItems").then((response) => {
      if (response.data.success === true) {
        console.log(response.data.result);
        dispatch(getAllItems(response.data.result));

        for (let i = 0; i < response.data.result.length; i++) {
          // console.log(response.data.result[i].itemId);
          const updateItems = [
            ...items,
            {
              itemId: response.data.result[i].itemId,
              userId: response.data.result[i].userId,
              itemName: response.data.result[i].itemName,
              itemCategory: response.data.result[i].itemCategory,
              itemPrice: response.data.result[i].itemPrice,
              itemDescription: response.data.result[i].itemDescription,
              itemCount: response.data.result[i].itemCount,
              itemImage: response.data.result[i].itemImage,
            },
          ];
          SetItems(updateItems);
          console.log("-------------geting all products----------------");
          console.log(items);
        }
      }
    });
  };

  const getFavourites = () => {
    if (user !== null) {
      Axios.get("/getFavourites/" + user.id).then(
        (response) => {
          console.log("user id for favourites" + user.id);
          console.log(response.data.result);
          if (response.data.success === true) {
            dispatch(favouritesList(response.data.result));
          }
        }
      );
    }
  };

  const handleFavourite = (itemId, userId) => 
  {
    console.log("Favourites added" + itemId + userId);
    alert('Item Added To Favourites!');
    Axios.post("http://127.0.0.1:4001/addFavourite", {
      itemId: itemId,
      userId: userId,
    }).then((response) => {
      if (response.data.success === true) {
        console.log(response.data.result);
        console.log("new fav added");
        // setFavoutriteIcon(true);
      }
    });
  };

  const handleOpenImage = (pro) => 
  {
    // console.log(pro.itemId);
    // console.log(pro.itemImage);
    dispatch(productOverview(pro));
    // console.log(pro.itemCount);
    // setProductOverview(true);
    window.location.pathname = "/productOverview";
  };

  var renderProducts = null;
  renderProducts = products.map((pro) => {
    return(
      <div className="home_cards col-md-4 mb-4">
        <div className="home_card card">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "5px",
            }}
          >
           
          </div>
          <img
            src={require("../Images/" + pro.itemImage)}
            className="home_image card-img-top"
            alt="..."
            onClick={() => {
              handleOpenImage(pro);
            }}
          /> 
          <br/>
          <h6 style={ {marginLeft : "20px"}}>{pro.itemName}
          <span style={ {marginLeft : "10px"} }>{"$"}{pro.itemPrice}
          </span></h6>
          <ProductContainer>
          <button 
          className="button button3"
          onClick={() => {handleFavourite(pro.itemId, user.id) }}>
            Add to Favourite
          </button>
          </ProductContainer>

          {/* <div className="card-body">
            <h5 className="card-title">{pro.itemName}</h5>

            <p className="card-text">{pro.itemDescription}</p>
            <button onClick={productOverViewScreen} className="btn-sm btn-dark">
              View Product
            </button>
          </div> */}
        </div>
      </div>
    );
  });

  return (
    <div
      className="etsy_body"
      style={{
        // backgroundColor: "red",
        marginTop: "-3%",
        marginLeft: "3%",
        marginRight: "3%",
      }}
    >
      <div className="container-fluid mx-1">
        <div className="row mt-5 mx-1">
          <div className="col-md-9">
            {/* {products.length} */}
            <div className="row">{renderProducts}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EtsyBody;

const ProductContainer = styled.footer`

.button 
{
  background-color: orange; /* Green */
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 10px;
}

.button3 {border-radius: 8px;}

`;