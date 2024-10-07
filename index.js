const express = require ('express');
const empRouter=require('./emp');
const userRouter=require('./users');
const app= express();
const SERVER_PORT= process.env.PORT || 3000;

app.get('/',(req,res)=> {
    res.send("Hello World")
}) ;

app.get('/about',(req,res)=>{
    res.send('About Page');
});



app.use('/user',userRouter)
app.use('/emp',empRouter)

app.listen(SERVER_PORT,()=>{ 
    console.log('SERVER is running on port 3000')
})