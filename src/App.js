import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Testimonial from "./component/Testimonial/Testimonial"
import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"
import initializeAuth from "./Firebase/firebase.initialize"


initializeAuth();
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Blog />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default App
