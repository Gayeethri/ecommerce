import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql` query {
    getAllProducts { _id, userId, itemCategory, itemName, itemPrice, itemDescription, itemCount, itemImage }
  }
`;

export const GET_USER_PURCHASED_ITEMS = gql`
  query getUserPurchasedItems($userId: String!) { getUserPurchasedItems(userId: $userId) 
    { userId, qty, _id, itemCategory, itemName, itemPrice, itemDescription, itemCount, itemImage
    }
  }
`;

export const GET_ALL_CART_ITEMS = gql`
  query getAllUserCartItems($userId: String!) 
  {   getCartList(userId: $userId){
        userId
        qty
        itemId {
        _id
        itemCategory
        itemName
        itemPrice
        itemDescription
        itemCount
        itemImage
      }
    }
  }
`;
