import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeTution from "./components/Pages/HomeTution";
// import register  from "./components/Pages/Register";
import { About } from "./components/Pages/About";
import Vaani from "./components/Pages/Vaani";
import { Details } from "./components/Pages/Details";
import PageNotFound from './pages/404';
import { Redirect } from 'react-router';
import Footer from "./components/footer/Footer";
import studentProgramme from "./components/Pages/StudentProgramme";
import Home1 from "./components/Home1";
import Internship from "./components/Pages/Internship";
import Collapsible from "./components/Pages/InternshipCollapse";
import Ambassador from "./components/Pages/Ambassador" 
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import React, { useState } from "react";
import IIt from "./components/Pages/Iitjee";
import Iitjeepay from "./components/Pages/Iitjeepay";
import Ielts from "./components/Pages/Ielts";
import Ieltspay from "./components/Pages/Ieltspay";
import Newc from "./components/Pages/Newc";
import Overseas from "./components/Pages/Overseas";
import Placement from "./components/Pages/Placement";
import Assignment from "./components/Pages/Assignment";
import Projects from "./components/Pages/Projects";
import Ieltsvisa from "./components/Pages/Ieltsvisa";
import Catxat from "./components/Pages/Catxat";
import Internshipservice from "./components/Pages/Internshipservice";

function App() {
  const [user,setLoginUser]= useState({})
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home1 />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Details />} />
            <Route
              exact
              path="/internship"
              element={
                <>
                  <Internship />
                  <Collapsible />
                </>
              }
            />
            <Route exact path="/details" element={<Details />} />
            <Route
              exact
              path="/studentprogramme"
              element={<studentProgramme />}
            />
            <Route exact path="/hometution" element={<HomeTution />} />
            <Route exact path="/ambassador" element={<Ambassador />} />
            <Route exact path="/vaani" element={<Vaani />} />
            <Route exact path="/iit" element={<IIt />} />
            <Route exact path="/iitjeepay" element={<Iitjeepay />} />
            <Route exact path="/ielts" element={<Ielts />} />
            <Route exact path="/ieltspay" element={<Ieltspay />} />
            <Route exact path="/overseas" element={<Overseas />} />
            <Route exact path="/placement" element={<Placement />} />
            <Route exact path="/assignment" element={<Assignment />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/ielts-visa" element={<Ieltsvisa />} />
            <Route exact path="/cat-xat-coaching" element={<Catxat />} />
            <Route exact path="/internship-service" element={<Internshipservice />} />
            <Route exact path="/newc" element={<Newc />} />
            <Route element={PageNotFound} />

            <Route
              exact
              path="/r"
              element={
                user && user._id ? (
                  <Home1 setLoginUser={setLoginUser} />
                ) : (
                  <Login setLoginUser={setLoginUser} />
                )
              }
            />
            <Route
              path="/login"
              element={<Login setLoginUser={setLoginUser} />}
            />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
export default App;