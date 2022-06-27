import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/PshikshaDB',{
useNewUrlParser:true,
useUnifiedTopology:true
}, () => {
    console.log("DB connected")

})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes

app.post("/login", (req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
          if(password === user.password){
              res.send({message: "Login Successfully",user:user})
          }
          else{
              res.send({message: "wrong password"})
          }    
        } 
        else{
            res.send({message: "user not registered"})
        }
    })
})

app.post("/register", (req,res)=>{
    const {name,email,password}=req.body
    User.findOne({email:email},(err, user) =>{
        if(user){
            res.send({message: "User already exists"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err=> {
                if(err) {
                    res.send(err)
                } else {
                    res.send( {message: "You are Successfully Registered, Please login now"})
                }
            })
        }
    })
})

app.listen(9002,()=> {
    console.log("DB started at port 9002")
})