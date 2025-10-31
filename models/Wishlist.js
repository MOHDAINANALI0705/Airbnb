const {getdb}=require('../utils/databaseutils');

module.exports= class Wishlist{
    constructor(homeId){
        this.homeId=homeId;
    }

    save() {
         const db= getdb();
       return db.collection('Wishlist').findOne({homeId: this.homeId}).then(existingFav => {
      if (!existingFav) {
        return db.collection('Wishlist').insertOne(this);
      }
      return Promise.resolve();
    })
  }

    static getWishlist(){
          const db= getdb();
      return db.collection('Wishlist').find().toArray();
  }

      static deleteById(delhomeId, callback){
      const db= getdb();
          return db.collection('Wishlist').deleteOne({homeId:delhomeId});
      }
    }