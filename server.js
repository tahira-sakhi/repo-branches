const express = require ("express");
const app = express ();
const port = 4000;




app.get("/",(req,res)=>{
    res.send("Helo this is my first github repository!")
});


app.listen (port, (err, data)=> {
    if (err){
        console.log(err)
    }
    else {
        console.log("http://localhost:4000/")}
    });