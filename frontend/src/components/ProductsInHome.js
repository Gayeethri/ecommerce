import React from "react";
import "./ProductsInHome.css";
import favouriteLogo from "./favourite.png";

function ProductsInHome() {
  return (
    <div className="content-area">
      <h4 className="title-text">Our Products</h4>
      <div className="recently-viewed">
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2017/08/01/22/19/white-2568288_1280.jpg"
            }
            alt={""}
          />
          <h5>USD 34.99</h5>
        </div>
        <div class="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2020/07/27/08/07/spa-5441663_1280.jpg"
            }
            alt={""}
          />
          <h5>USD 29.50</h5>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/05/25/14/27/summer-783344_1280.jpg"
            }
            alt={""}
          />
          <h5>USD 48.00</h5>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/12/03/00/04/snowman-1073524_1280.jpg"
            }
            alt={""}
          />
          <h5>USD 116.00</h5>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2017/09/15/12/10/mockup-2752023_1280.jpg"
            }
            alt={""}
          />

          <div className="row">
            <div className="col-sm-4">USD 65</div>
          </div>

          <div>
            <h6> Product Name </h6> 
          </div><br />

        </div>
      </div>

      <div className="feltedsky">
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2017/08/01/22/19/white-2568288_1280.jpg"
            }
            alt={""}
          />
          <h5>USD 34.99</h5>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2020/07/27/08/07/spa-5441663_1280.jpg"
            }
            alt={""}
          />
          <h5>USD 29.50</h5>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/05/25/14/27/summer-783344_1280.jpg"
            }
            alt={""}
          />
          <h5>USD 48.00</h5>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/12/03/00/04/snowman-1073524_1280.jpg"
            }
            alt={""}
          />
          <h5>USD 116.00</h5>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2017/09/15/12/10/mockup-2752023_1280.jpg"
            }
            alt={""}
          />
          <h5>USD 165.00</h5>
        </div>
      </div>
    </div>
  );
}
export default ProductsInHome;
