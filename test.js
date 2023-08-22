const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/Church_Info")
.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log('error');
})

// Create a schema
const infoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

// Create a collection
const collection = new mongoose.model('info',infoSchema)

data=(
    {
    name: "The Lion of Judah Ministries Int'l",
    address: "42 Bright Street, Brookfields",
    location : "Brookfields"
    },
    {
    name:"The Word Global Ministries",
    address:"38 Oniel Street",
    location:"Sorie Town"
    }
)
collection.insertMany([data])
