const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/tutorial")
.then(() =>{
    console.log('mongodb connected');
})
.catch(() =>{
    console.log('error');
})

// Create a Schema
const tutSchema = new mongoose.Schema({
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

//Create a collection
const collection=new mongoose.model('tut',tutSchema)

data={
    name:"The Word Global Ministries",
    address:"38 Oniel Street",
    location:"Sorie Town"
}

collection.insertMany([data])