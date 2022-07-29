import React, {useState} from "react";
import "./Register.css";
import axios from "axios"
import { useNavigate} from "react-router-dom";

const Register =()=>{

    const navigate = useNavigate()
    function handleClick() {
        navigate("/login");
      }
    // navigate('/Login');

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register =()=>{
        const {name,email,password,reEnterPassword}=user
        if(name && email && password && (password===reEnterPassword)){
            axios.post("http://localhost:8000/register", user)  
            .then(res=>{
                alert(res.data.message)
        })
    }
        else{
            alert("invalid inputs")
        }
        
    }

    return (
        
        <div className="mg">
        <div className="img" style={{ 
           backgroundImage: `url(${process.env.PUBLIC_URL + '/img.jpg'})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' 
          }}>
        <div className="loginMain">
            <h2 className="gradient">REGISTER YOURSELF</h2>
            <h3 className="gradient">Welcome and start your new journey with us.</h3>
            <input className="fill" type="text" name="name" value={user.name} placeholder="Please enter your name" onChange={handleChange}></input>
            <input className="fill" type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}></input>
            <input className="fill" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
            <input className="fill" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter password" onChange={handleChange}></input>
            <div className="button" onClick={register}>CONTINUE</div>
            <div>already registered?</div>
            <div className="button" onClick={handleClick}>Login</div>
        </div>
        </div>
        </div>
    )
}

export default Register