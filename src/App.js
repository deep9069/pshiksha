import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeTution from "./components/Pages/HomeTution";
// import register  from "./components/Pages/Register";
import { About } from "./components/Pages/About";
import Training from "./components/Pages/Training";
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
import Neet from "./components/Pages/Neet";
import Ielts from "./components/Pages/Ielts";
import Ieltspay from "./components/Pages/Ieltspay";
import Newc from "./components/Pages/Newc";
import Overseas from "./components/Pages/Overseas";
import Neetpay from "./components/Pages/Neetpay";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import TermsOfService from "./components/Pages/TermsOfService";
import UserPolicy from "./components/Pages/UserPolicy";

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
            <Route exact path="/training_cum_internship" element={<Training />} />
            <Route exact path="/iit" element={<IIt />} />
            <Route exact path="/iitjeepay" element={<Iitjeepay />} />
            <Route exact path="/neetpay" element={<Neetpay />} />
            <Route exact path="/neet" element={<Neet />} />
            <Route exact path="/ielts" element={<Ielts />} />
            <Route exact path="/ieltspay" element={<Ieltspay />} />
            <Route exact path="/overseas" element={<Overseas />} />
            <Route exact path="/newc" element={<Newc />} />
            <Route exact path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route exact path="/terms_of_service" element={<TermsOfService />} />
            <Route exact path="/user_policy" element={<UserPolicy />} />
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