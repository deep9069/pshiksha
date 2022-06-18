import "./App.css";
import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { SignUpLogIn } from "./components/Pages/SignUpLogIn";
import { Setting} from "./components/Pages/Setting";
import { Search} from "./components/Pages/Search";
import { Trending } from "./components/Pages/homeComponents/Trending";
import { Details } from "./components/Pages/Details";
import Post from "./components/Post/index";
import MainPage from './pages';
import Hero from "./components/Hero/index";
import Header from "./components/Header/index"
import PageNotFound from './pages/404';
import { Redirect } from 'react-router';
import Footer from "./components/footer/Footer";
import Sign_in from "./components/authentication/sign_in";
import ImageSlider from "./components/carosel/imageSlider";
import images from "./components/carosel/images";
import Home1 from "./components/Home1";
function App() {
  return (
    <>
      <Router >
        {/* <Header/> */}
        <NavBar/>
        <Home1/>
        <ImageSlider images={images}/>
         {/* <sign_in/> */}
        {/* <Hero/> */}
        <div className="pages">
          <Switch>
          <Route path="/sign_in" component={Sign_in}/>
          
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/signUpLogIn" component={SignUpLogIn} />
            <Route path="/setting" component={Setting}/>
            <Route path="/details" component={Details}/>
            <Route path="/trending" component={Trending}/>
            
            <Route exact path="/post/:postId" component={Post} />
            <Route  component={PageNotFound} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </>
  );
}
export default App;