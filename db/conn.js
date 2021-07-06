const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/links',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection successful....");
}).catch((e)=>{
    console.log("Connection unsuccessful");
})

