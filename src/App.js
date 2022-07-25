import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

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
import InternWoInterview from "./components/Pages/InternWoInterview";
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
import Australia from "./components/Pages/Australia";
import Austria from "./components/Pages/Austria";
import Belgium from "./components/Pages/Belgium";
import Canada from "./components/Pages/Canada";
import Germany from "./components/Pages/Germany";
import France from "./components/Pages/France";
import Ireland from "./components/Pages/Ireland";
import Newzealand from "./components/Pages/Newzealand";
import Singapore from "./components/Pages/Singapore";
import Sweden from "./components/Pages/Sweden";
import Uk from "./components/Pages/Uk";
import Usa from "./components/Pages/Usa";
import Blog from "./components/blog/blog";
import BlogPost from "./components/blog/BlogPost";
import NewPost from "./components/blog/NewPost";
import Ck from "./components/blog/ck";
import Sitemap from "./pages/Sitemap";
import Assignments from "./pages/Assignmentsmaking";
import Backpaperprep from "./pages/Backpaperprep";
import Btechprojects from "./pages/Btechprojects";
import Cvmaking from "./pages/Cvmaking";
import Peptalk from "./pages/Peptalk";
import Placementprep from "./pages/Placementprep";
import Presentationmaking from "./pages/Presentationmaking";
// import Hometuition from "./pages/Hometuition";
import Update from "./pages/updateofdata";
import Dochat from "./pages/Dochat";
import Gettutor from "./pages/Gettutor";
import Chatbutton from "./pages/Chatbutton";



function App() {
  const [user,setLoginUser]= useState({})
  return (
    <>
      {/* <div className="App"> */}
        <Router>
          <NavBar />
          {/* <Sitemap/> */}
          <Routes>
          <Route exact path="/dochat" element={<Dochat />} />


            <Route exact path="/" element={<Home1 />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Details />} />
            <Route exact path="/internship" element={
                <>
                  <Internship />
                  <Collapsible />
                </>
              }
            />
            <Route exact path="/details" element={<Details />} />
            <Route exact path="/studentprogramme" element={<studentProgramme />}/>
    
            <Route exact path="/ambassador" element={<Ambassador />} />
            <Route exact path="/intern_without_interview" element={<InternWoInterview />}/>
            <Route exact path="/training_cum_internship" element={<Training />}/>
            <Route exact path="/iit" element={<IIt />} />
            <Route exact path="/iitjeepay" element={<Iitjeepay />} />
            <Route exact path="/neetpay" element={<Neetpay />} />
            <Route exact path="/neet" element={<Neet />} />
            <Route exact path="/ielts" element={<Ielts />} />
            <Route exact path="/ieltspay" element={<Ieltspay />} />
            <Route exact path="/overseas" element={<Overseas />} />
            <Route exact path="/overseas/australia" element={<Australia />} />
            <Route exact path="/overseas/austria" element={<Austria />} />
            <Route exact path="/overseas/belgium" element={<Belgium />} />
            <Route exact path="/overseas/canada" element={<Canada />} />
            <Route exact path="/overseas/france" element={<France />} />
            <Route exact path="/overseas/germany" element={<Germany />} />
            <Route exact path="/overseas/belgium" element={<Belgium />} />
            <Route exact path="/overseas/ireland" element={<Ireland />} />
            <Route exact path="/overseas/newzealand" element={<Newzealand />} />
            <Route exact path="/overseas/singapore" element={<Singapore />} />
            <Route exact path="/overseas/sweden" element={<Sweden />} />
            <Route exact path="/overseas/united_kingdom" element={<Uk />} />
            <Route exact path="/overseas/united_states_of_america" element={<Usa />} />
            <Route exact path="/newc" element={<Newc />} />
            <Route exact path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route exact path="/blog" element={<Blog/>} />
            <Route exact path="/blogpost" element={<BlogPost/>} />
            <Route exact path="/newpost" element={<NewPost/>} />
            <Route exact path="/sitemap" element={<Sitemap/>} />

            <Route exact path="/assignment" element={<Assignments/>} />
            <Route exact path="/backpaper" element={<Backpaperprep/>} />
            <Route exact path="/projects" element={<Btechprojects/>} />
            <Route exact path="/cvmaking" element={<Cvmaking/>} />
            <Route exact path="/petalk" element={<Peptalk/>} />
            <Route exact path="/placementprep" element={<Placementprep/>} />
            <Route exact path="/presentation" element={<Presentationmaking/>} />
            <Route exact path="/gettutor" element={<Gettutor/>} />
            <Route exact path="/terms_of_service" element={<TermsOfService />}/>
            <Route exact path="/user_policy" element={<UserPolicy />} />
            <Route element={PageNotFound} />
            </Routes>
            <Routes>
            <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />}/>
            <Route path="/register" element={<Register />} />
          </Routes>
          {/* <Update/> */}

          {/* <Footer /> */}

        </Router>
      {/* </div> */}
    </>
  );
}
export default App;