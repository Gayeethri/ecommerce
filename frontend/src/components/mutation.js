import { gql } from "@apollo/client";

export const USER_REGISTRATION= gql`  mutation register
(
    $username: String!, $email: String!, $password: String!
    fullAddress: String,
    city: String,
    phoneNumber: String,
    dob: String,
    gender: String,
    profilePic: String,
    about: String,
    shopName: String,
    shopImage: String
    ) 
    {
      register( username: $username, email: $email, password: $password,
        fullAddress: $fullAddress, city: $city, phoneNumber : $phoneNumber,
        dob:$dob, gender:$gender, profilePic : $profilePic, about: $about,
        shopName:$shopName, shopImage: $shopImage ) {  username }
    }
`;


export const ADD_TO_PURCHASES = gql`   mutation userItemPurchase
(
  $itemId: String!
  $userId: String!
  $itemName: String!
  $itemImage: String!
  $itemCount: Int!
  $totalPrice: Float
  $qty: Int!
  $itemDescription: String!
  $giftMessage: String!
) {
    userItemPurchase(
      itemId: $itemId
      userId: $userId
      itemName: $itemName
      itemImage: $itemImage
      itemCount: $itemCount
      totalPrice: $totalPrice
      qty: $qty
      itemDescription: $itemDescription
      giftMessage: $giftMessage
    ) 
    {
      itemName
    }
  }
`;

export const DELETE_FROM_CART = gql`
  mutation deleteItemFromCart($itemId: String!) {
    deleteItemFromCart(itemId: $itemId) { itemId } }
`;


export const SHOP_CREATE = gql`
  mutation createShop($id: String!, $shopName: String!) 
  {  createShop(id: $id, shopName: $shopName) {   shopName }
  }
`;

export const CART = gql`
  mutation addItemToCart($userId: String!, $itemId: String!, $qty: Int!) 
  {
    addItemToCart(userId: $userId, itemId: $itemId, qty: $qty) {      itemId    }
  }
`;

export const EDIT_SHOP_ITEM_QTY = gql`
  mutation editShopItemQtyById($itemId: String!, $itemCount: Int!, $qty: Int!) {
    editShopItemQtyById(itemId: $itemId, itemCount: $itemCount, qty: $qty) { itemCount }
  }
`;

export const ADD_PRODUCT_TO_DB = gql`

  mutation addItemToDB
  (
    $itemName: String!
    $userId: String!
    $itemPrice: String!
    $itemCount: String!
    $itemImage: String!
    $itemDescription: String!
    $itemCategory: String!
  ) 
  {
    addItemToDB(
      userId: $userId
      itemCategory: $itemCategory
      itemPrice: $itemPrice
      itemDescription: $itemDescription
      itemCount: $itemCount
      itemImage: $itemImage
      itemName: $itemName
    )
    {
        itemName
    }
  }
`;

export const SHOP_NAME_CHECK = gql`
  mutation checkShopName($shopName: String!) 
  {
    checkShopName(shopName: $shopName) {  shopName }
  }
`;