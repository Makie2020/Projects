import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

ReactDOM.render(
    <div id="mainContent">
        <Info />
        <About />
        <Interests />
        <Footer />
    </div>,
    document.getElementById("root")
)