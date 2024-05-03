const express = require("express");
const cors = require("cors");

const app = express();


var corOption = {
    origin:'http://localhost:4200'
}

//middleware
app.use(cors(corOption))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.json({msg:"ugukrefkh"})
})

// routers
const productrouter = require('./routes/productRoute')
app.use('/products', productrouter)

const port = process.env.PORT || 8087;

app.listen(port,()=>{
    console.log("server is running on ",port)
})

