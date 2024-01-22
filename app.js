const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

// import router 

const router = require("./routes/routes")

const PORT = 5000;




// middlewares
// static
app.use(express.static("public"))
// body-parser
app.use(bodyParser.urlencoded({extended:true}))
// ejs
app.set("view engine","ejs")



app.use(router)




mongoose.connect("mongodb://localhost:27017/itc-tdlDB")
.then(()=>{
    console.log("Connected to DB");
    app.listen(PORT,()=>{
        console.log("server started on port :" ,PORT);
    })
})
.catch((err)=>{
    console.log(err);
})


