require('dotenv').config()
const { MongoClient } = require("mongodb");
let client
let usersCollection

function connect() {

    const uri = `mongodb+srv://Hloveday99:${process.env.DB_PASSWORD}@cluster0.i2ar2.mongodb.net/helio?retryWrites=true&w=majority`

        // Create a new MongoClient
        client = new MongoClient(uri,{ useUnifiedTopology: true });

        
          // Connect the client to the server
        return client.connect()
          .then(() => {

          
            console.log("Connected successfully to server")
          // Connect to collection
         return client.db("Helio").collection('users');
        
        })
        .then (collection => {
            usersCollection = collection
        })
        .catch((err) => {
        console.log(err)
    
        })
           
}
function insertOne() {

    return usersCollection.insertOne({
        fName: "Spongebob",
        lName: "Squarepants"
    })

}

function readAll() {

let rtnValue =  usersCollection.find({}).toArray()

        return rtnValue
}

function findOne() {

   return usersCollection.findOne({ Fname: "James" });
}


function close() {
        client.close()
}

module.exports.connect = connect;
module.exports.insertOne = insertOne;
module.exports.readAll = readAll;
module.exports.findOne = findOne;
module.exports.close = close;

