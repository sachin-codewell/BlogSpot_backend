const express = require('express');
const blogRoutes = require('./Router/routes')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');


const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin:true,
    credentials:true
}));
app.use('/images',express.static('images'))
app.use('/api',blogRoutes);

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/UserBlogs')
mongoose.connection.once('open',()=>{
    console.log('connected');
}).on('error',(err)=>{
    console.log(err);
})


const port = 5500
app.listen(port,(err)=>{
    if(!err){
        console.log('server is running on port '+ port)
    }
})