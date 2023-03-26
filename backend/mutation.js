const { UserDetails ,userItems, userCart, userPurchases } = require("./typeDefs");
const userItemsDb = require("./models/items");
const userCartsdb = require("./models/cart");
const userPurchasesdb = require("./models/purchases");
const userDetailsDb = require("./models/model");
const {  GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, } = require("graphql");
  const mutation = new GraphQLObjectType({ name: "userDetails", fields: {  
    register: 
    {  type: UserDetails,
               args: {
                       username: { type: GraphQLString },
                       email: { type: GraphQLString },
                       password: { type: GraphQLString },
                    },
              resolve(parent, args)
              {     const user = new userDetailsDb({ 
                    username: args.username,
                    email: args.email,
                    password: args.password,
                    fullAddress: args.fullAddress,
                    city: args.city,
                    phoneNumber: args.phoneNumber,
                    dob: args.dob,
                    gender: args.gender,
                    profilePic: args.profilePic,
                    about: args.about,
                    shopName: args.shopName,
                    shopImage: args.shopImage,
                  })
                  console.log("------mutation for user register-------");
                  console.log(user)

                  return user.save().then((result=>{           
                      return {...result._doc};
                  })).catch(( err=>{
                      throw err;
                  }));
              },
    },
      findShopDuplicates: {
        type: User,
        args: {
          shopName: { type: GraphQLString },
        },
        async resolve(parent, args) {
          const shopAvailability = await Userdb.findOne({
            shopName: args.shopName,
          }).count();
          if (shopAvailability !== 0) {
            console.log("in db");
            throw new Error("shop name already exists db");
          }
          return args;
        },
      },
      createShop: {
        type: User,
        args: {
          id: { type: GraphQLString },
          shopName: { type: GraphQLString },
        },
        async resolve(parent, args) {
          const data = await Userdb.findByIdAndUpdate(
            { _id: args.id },
            {
              shopName: args.shopName,
            }
          );
          console.log(data);
          if (!data) {
            console.log(data + " can't update shopname");
            throw new Error("Can't update shopname");
          }
          return args;
        },
      },
  
      addToCart: {
        type: CartItem,
        args: {
          userId: { type: GraphQLString },
          itemId: { type: GraphQLString },
          qty: { type: GraphQLInt },
        },
        async resolve(parent, args) {
          const cart = new cartdb({
            userId: args.userId,
            itemId: args.itemId,
            qty: args.qty,
          });
          const isCartItemExist = await cartdb.exists({ itemId: args.itemId });
          if (isCartItemExist) {
            console.log("item already exist");
            await cartdb.findOneAndUpdate(
              { itemId: args.itemId },
              { qty: args.qty }
            );
            console.log("qty updated");
          } else {
            console.log("item not exist");
            cart.save(cart);
          }
          return cart;
        },
      },
      deleteFromCart: {
        type: CartItem,
        args: {
          itemId: { type: GraphQLString },
        },
        async resolve(parent, args) {
          const cart = await cartdb.findOneAndDelete({ itemId: args.itemId });
          console.log(cart);
          return cart;
        },
      },


      userItemPurchase: { type: userPurchases,
        
        args: {
          itemId: { type: GraphQLString },  userId: { type: GraphQLString }, itemName: { type: GraphQLString },
          itemImage: { type: GraphQLString }, itemCount: { type: GraphQLInt }, totalPrice: { type: GraphQLFloat },
          qty: { type: GraphQLInt }, itemDescription: { type: GraphQLString }, giftMessage: { type: GraphQLString },
        },
        async resolve(parent, args) { 
             const userPurchaseDetails = 
             new userPurchasesdb({ 
                            userId: args.userId, itemName: args.itemName, itemPrice: args.itemPrice,
                            itemCount: args.itemCount, qty: args.qty, itemId: args.itemId, itemImage: args.itemImage, 
                            itemDescription: args.itemDescription, giftMessage: args.giftMessage,
                            });

          await userPurchaseDetails.save(userPurchaseDetails)
          .then((result=>{           
                 return {...result._doc};
             }))
         .catch(( err=>{
            throw err;
             }));

             console.log("------mutation for user purchase-------");
             console.log(userPurchaseDetails)

          return args;
        },
      },




      editItemQtyById: {
        type: Items,
        args: {
          itemId: { type: GraphQLString },
          itemCount: { type: GraphQLInt },
          sales: { type: GraphQLInt },
        },
        async resolve(parent, args) {
          const items_update = Itemsdb.findByIdAndUpdate(
            { _id: args.itemId },
            {
              itemCount: args.itemCount,
              sales: args.sales,
            },
            {
              new: true,
            }
          );
          console.log(items_update);
          return items_update;
        },
      },
      clearCart: {
        type: CartItem,
        async resolve(parent, args) {
          const cartDel = await cartdb.deleteMany({});
          return cartDel;
        },
      },

    },
  });
  

  
  module.exports = {
    mutation,
  };