const Home = require("../models/host");
const wishlist= require ("../models/Wishlist")

exports.ShowIndexPage=(req,res,next)=>{
     Home.fetchAll().then(details => {res.render('index',{homes:details,pagetitle
   :'Home'})});
}

exports.ShowHomepage=(req,res,next)=>{
     Home.fetchAll().then(details=> {res.render('homepage',{details:details,pagetitle
   :'Home'})});
}

exports.ShowDetails = (req, res, next) => {
    const homeId = req.params.ID;
  Home.findById(homeId).then(home => {
    if (!home) {
      res.redirect("/homes");
    } else {
      res.render("details", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
})
};

exports.showWishlist = (req, res, next) => {
    wishlist.getWishlist().then(wishlistIds => {
      console.log(wishlistIds);
      wishlistIds = wishlistIds.map(item =>item.homeId);
       Home.fetchAll().then(homes => {
        const wishlistHomes = homes.filter(home => wishlistIds.includes(home._id.toString()));
        res.render("wishlist", {
          details: wishlistHomes,
          pageTitle: "Your Wishlist",
          currentPage: "Wishlist",
        });
      });
    });
  };
exports.AddToWishlist = (req, res, next) => {
    const homeId = req.body.id;
    console.log(homeId);
  const wish = new wishlist(homeId);
  wish.save().then().finally(()=>{
    res.redirect("/homes");
  });

    exports.removeHome = (req, res, next) => {
      const homeId = req.params.id;
      wishlist.deleteById(homeId).then((result) => {
        console.log("Deleted from wishlist");
  }).finally(() => {
        res.redirect("/wishlist");
      });
    }
}