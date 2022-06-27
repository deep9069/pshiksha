import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeTution from "./components/Pages/HomeTution";
// import register  from "./components/Pages/Register";
import { About } from "./components/Pages/About";
import Vaani from "./components/Pages/Vaani";
import { Details } from "./components/Pages/Details";
import Post from "./components/Post/index";
import PageNotFound from './pages/404';
import { Redirect } from 'react-router';
import Footer from "./components/footer/Footer";
import studentProgramme from "./components/Pages/StudentProgramme";
import Home1 from "./components/Home1";
import Internship from "./components/Pages/Internship";
import Ambassador from "./components/Pages/Ambassador" 
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import React, { useState } from "react";
import IIt from "./components/Pages/Iitjee";
import Ielts from "./components/Pages/Ielts";
import Ieltspay from "./components/Pages/Ieltspay";
import Newc from "./components/Pages/Newc";
import Overseas from "./components/Pages/Overseas";
function App() {
  const [user,setLoginUser]= useState({})
  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home1/>} ></Route>
            <Route exact path="/about" element={<About/>} ></Route>
            <Route exact path="/contact" element={<Details/>} ></Route>
            <Route exact path="/internship" element={<Internship/>} ></Route>
            <Route exact path="/details" element={<Details/>}></Route>
            <Route exact path="/studentprogramme" element={<studentProgramme/>}></Route>
            <Route exact path="/hometution" element={<HomeTution/>}></Route>
            <Route exact path="/ambassador" element={<Ambassador/>} ></Route>
            <Route exact path="/vaani" element={<Vaani/>} ></Route>
            <Route exact path="/iit" element={<IIt/>} ></Route>
            <Route exact path="/ielts" element={<Ielts/>} ></Route>
            <Route exact path="/ieltspay" element={<Ieltspay/>} ></Route>
            <Route exact path="/overseas" element={<Overseas/>} ></Route>
            <Route exact path="/newc" element={<Newc/>} ></Route>
            <Route  element={PageNotFound} />

            <Route exact path="/r" element={user && user._id ? <Home1 setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}></Route>
            <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            </Routes>
          {/* <Footer/> */}
          <Routes>
           
          </Routes>
      </Router>
    </>
  );
}
export default App;