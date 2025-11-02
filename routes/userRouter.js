const express = require('express');

const userRouter = express.Router();

const userController=require('../controllers/user');;

userRouter.get("/",userController.ShowIndexPage);
userRouter.get("/homes",userController.ShowHomepage);

userRouter.get("/home/:ID",userController.ShowDetails);
userRouter.post("/wishlist",userController.AddToWishlist);
userRouter.get("/wishlist",userController.showWishlist);
userRouter.get("/remove-home/:Id",userController.removeHome);


module.exports = userRouter;
