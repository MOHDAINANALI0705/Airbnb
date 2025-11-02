
const express = require('express');

const hostRouter = express.Router();

const homeController=require('../controllers/host');

hostRouter.get("/addhome",homeController.AddDetails);


hostRouter.post("/addhome",homeController.PostDetails);

hostRouter.get("/host-homes",homeController.Showhosthomes);
hostRouter.get("/host/Edit-home/:homeid",homeController.EditHome);
hostRouter.post("/edit-home",homeController.PostEditHome);
hostRouter.post("/host/delete-home/:homeid",homeController.postDeleteHome);
hostRouter.post("/wishlist/remove/:ID",homeController.RemoveHome);

exports.hostRouter= hostRouter;
