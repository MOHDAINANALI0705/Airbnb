const { ObjectId } = require('mongodb');
const {getdb}=require('../utils/databaseutils');

   module.exports =class Home{
 constructor(housename, location,price, ratings, photoURL,description,_id) {
        this.housename = housename;
        this.price= price;
        this.ratings = ratings;
        this.photoURL = photoURL;
        this.location=location;
        this.description=description;
        if(_id){
        this._id=_id;
      }
    }

    save() {
       const db= getdb();
      if(this._id){
         const UPDATEObj={housename:this.housename,location:this.location,price:this.price,ratings:this.ratings,photoURL:this.photoURL,description:this.description};
        return db.collection('homes').updateOne({_id:new ObjectId(String(this._id))},{$set:UPDATEObj});
      }else{
      return db.collection('homes').insertOne(this);}
  }

  static fetchAll() {
  const db= getdb();
      return db.collection('homes').find().toArray();
  }

  static findById(homeId) {
  const db= getdb();
      return db.collection('homes').find({_id:new ObjectId(String(homeId))}).next();
  }

  static deleteById(homeId){
  const db= getdb();
      return db.collection('homes').deleteOne({_id:new ObjectId(String(homeId))});
  }
}