const mongo = require('mongodb');

const MongoClient = mongo.MongoClient

const mongoUrl ='mongodb+srv://AinanAli:Ainanali786*@ainan.lbgrfz1.mongodb.net/?retryWrites=true&w=majority&appName=Ainan';

let _db;

const mongoConnect = (callback)=>{
MongoClient.connect(mongoUrl).then((client)=>{
   callback();
    _db=client.db('Airbnb');
}).catch((err)=>{
    console.log(err);
});
}

const getdb = () =>{
    if(!_db){
        throw new Error('No database found! ');
    }else{
    return _db;
    }
}

exports.getdb = getdb;
exports.mongoConnect= mongoConnect;