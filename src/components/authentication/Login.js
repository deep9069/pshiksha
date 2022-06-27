import React, {useState} from "react"
import "./Register.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login =({setLoginUser})=>{

    const navigate = useNavigate();
    function handleClick() {
        navigate("/register");
      }
        // navigate('/register');

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login =()=>{
            axios.post("http://localhost:9002/login", user)
            .then(res=>{
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate("/")
            })
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
            <h1 className="gradient">LOGIN</h1>
            <h3 className="gradient">Welcome back! login to access sweet market place.</h3>
            <input className="fill" type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input>
            <input className="fill" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
            <h4 className="gradient">Forgot Password?</h4>
            <div className="button" onClick={login}>CONTINUE</div>
            <div>not registered?</div>
            <div className="button" onClick={handleClick}>Register Now</div>
        </div>
        </div>
        </div>
    )
}

export default Login