const express= require('express');
const app = express();
require('dotenv').config();
require('./db/conn');
const port=process.env.PORT || 8000;

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'hbs')

// routes
app.use('/api/files', require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(port , ()=>{
    console.log(`listening to port ${port}`);
});