import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId, product }) => {
  
  const handleProductScreen = () =>
  {
       alert('');
  }

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>

        { localStorage.setItem( productId, JSON.stringify(product)) }
        <button onClick={handleProductScreen}>  </button>
      </div>
    </div>
  );
};

export default Product;