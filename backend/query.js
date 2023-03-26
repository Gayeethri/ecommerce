const { GraphQLObjectType, GraphQLList, GraphQLString } = require("graphql");
const userItemsDb = require("../models/items");
const userCartsdb = require("../models/cart");
const userPurchasesdb = require("../models/purchases");
const {  userItems, userCart, userPurchases } = require("./typeDefs");

const userQueries = new GraphQLObjectType({  name: "query",  fields: {

    getPurchasesList: { type: new GraphQLList(userPurchases), args: { userId: { type: GraphQLString }, },
        async resolve(parent, args) {

            const userPurchases = userPurchasesdb
            .find({ userId: args.userId }).populate("itemId").exec();
             return userPurchases;
        },
      },
   
    getCartList: { type: new GraphQLList(userCart), args: { userId: { type: GraphQLString }, },
      async resolve(parent, args) {

          const items = await userCartsdb
          .find({ userId: args.userId }).populate("itemId").exec();
           return items;
      },
    },

    getItemsList: { type: new GraphQLList(userItems),
        resolve(parent, args) 
        {
           return userItemsDb.find({});
        },
      },

  },
});

module.exports = { userQueries, };