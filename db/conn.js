const mongoose=require('mongoose');

mongoose.connect(process.env.Mongodb_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection successful....");
}).catch((e)=>{
    console.log("Connection unsuccessful");
})

