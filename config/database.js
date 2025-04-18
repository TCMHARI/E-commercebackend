const mongoose=require("mongoose")
const connectDatabase=()=>{
    console.log("MongoDB URI:", process.env.URI);

    mongoose.connect(process.env.URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then((e)=>{
        console.log('MongoDb connected....')
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports=connectDatabase