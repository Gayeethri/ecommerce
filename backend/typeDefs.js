const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");
  const UserDetails = new GraphQLObjectType({
    name: "UserDetails",
    fields: () => ({
      username: { type: GraphQLString }, email: { type: GraphQLString },phoneNumber: { type: GraphQLString },
      password: { type: GraphQLString }, dob: { type: GraphQLString },  gender: { type: GraphQLString },
      profilePicture: { type: GraphQLString }, fullAddress: { type: GraphQLString }, city: { type: GraphQLString },
      about: { type: GraphQLString }, shopName: { type: GraphQLString }, shopImage: { type: GraphQLString },
    }),
  });
  
  const userItems = new GraphQLObjectType({
    name: "userItems",
    fields: () => ({
      userId: { type: GraphQLString }, itemName: { type: GraphQLString }, itemCategory: { type: GraphQLString },
      itemPrice: { type: GraphQLInt }, itemDescription: { type: GraphQLString }, itemCount: { type: GraphQLInt },
      qty: { type: GraphQLInt }, itemImage: { type: GraphQLString },
    }),
  });
  
  const userCart = new GraphQLObjectType({
    name: "userCart",
    fields: () => ({ itemId: { type: Items }, userId: { type: GraphQLString },
    qty: { type: GraphQLInt },
    }),
  });
  
  const userPurchases = new GraphQLObjectType({
    name: "userPurchases",
    fields: () => ({
      itemId: { type: GraphQLString },      userId: { type: GraphQLString },  itemName: { type: GraphQLString },
      itemImage: { type: GraphQLString }, totalPrice: { type: GraphQLInt }, itemDescription: { type: GraphQLString }, 
      itemCount: { type: GraphQLInt }, qty: { type: GraphQLInt }, giftMessage: { type: GraphQLString },
    }),
  });

  module.exports = { UserDetails, userItems, userCart, userPurchases, };