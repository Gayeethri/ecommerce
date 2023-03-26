import { margin } from '@mui/system';
import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {posts.map(post => (
        <div style={{ borderStyle: "solid", paddingLeft: "50px", paddingBottom : "220px", width: "500px", height : "300px" }}>
         <img
            style={{ width : "250px", height: "150px", margin: "0px"}}
            src={require("../Images/" + post.itemImage)}
            className="home_image card-img-top"
            alt="..."/>
          <br></br>    
          <p> <b>Name</b> : {post.itemName}  <br></br>    
              <b>Order Id</b>   <span  style={{ marginLeft: "15px" }}> : {post.itemOrderId}</span> <br></br> 
              <b>Qty</b>   <span  style={{ marginLeft: "15px" }}> : {post.itemQty}</span> <br></br>
              <b>Price</b>   <span  style={{ marginLeft: "15px" }}> : ${post.itemPrice}</span> <br></br> 
              {post.itemOrderMsg == null ? console.log('Empty Msg')
            : <p> <b> Gift Message </b> : {post.itemOrderMsg} </p>  }

          </p>         
        </div>
      ))}
    </div>
  );
};

export default Posts;