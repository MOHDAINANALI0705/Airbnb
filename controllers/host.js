const Home = require("../models/host");

exports.AddDetails=(req,res,next)=>{
   res.render('host/Edit-Home',{pagetitle
   :'Form',currentPage:'Form', editing: false,}
   );
}

exports.EditHome=(req,res,next)=>{
    const homeId = req.params.homeid;
    const editing = req.query.editing==='true';
   Home.findById(homeId).then(home => {
    if (!home) {
      res.redirect("/homes");
    } else {
      res.render("host/Edit-Home", {
        home: home,
        pageTitle: "Edithome",
        currentPage: "Edithome",
        editing: editing,
      });
    }
})
}


exports.PostDetails=(req,res,next)=>{
const {housename, location,price, ratings, photoURL,description,id} = req.body;

const home=new Home(housename, location,price, ratings, photoURL,description,id);
home.save().then(()=>{
  console.log('Homes Added');
})
    res.render('Conformationpage',{pagetitle
   :'Conformation'}
   );
}

exports.Showhosthomes=(req,res,next)=>{
  Home.fetchAll().then((details) =>  {res.render('host/host-homes',{details:details,pagetitle
   :'host-homes'})});
}

exports.PostEditHome=(req,res,next)=>{
const {housename, location,price, ratings, photoURL,description,id} = req.body;
console.log(req.body);

const home=new Home(housename, location,price, ratings, photoURL,description,id);
home.save();

    res.redirect('/host-homes');

}

exports.postDeleteHome=(req,res,next)=>{
  const homeId = req.params.homeid;
  console.log(homeId);
  Home.deleteById(homeId).then( () => {
    res.redirect('/host-homes');
  }).catch(error =>{
    console.log(error);
  }); 
}
