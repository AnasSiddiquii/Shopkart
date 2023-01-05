const express = require ("express")
const cors = require ("cors")
require ('./db/config')
const Product = require ('./db/Product')
const User = require("./db/User")
const app = express()

app.use(express.json())
app.use(cors())


// post
app.post("/create", async (req,resp)=>{
    console.log(req.body)
    let data = new Product(req.body)
    let result = await data.save()
    resp.send(result)
})


// get
app.get("/products", async (req,resp)=>{
    let data = await Product.find()
    resp.send(data)
})


// search
app.get("/products/:key", async (req,resp)=>{
    console.log(req.params.key)
    let data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"color":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data)
})


// signup
app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password    
    resp.send({result})
    
})


// login
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body);
        if (user) {
                resp.send({user})
        } else {
            resp.send({ result: "No User found" })
        }
    } else {
        resp.send({ result: "No User found" })
    }
});


app.listen(5000)