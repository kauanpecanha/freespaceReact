import React from "react";
import { BrowserRouter } from "react-router-dom";

import Calculator from '../Calculator/Calculator'
import FirstScreem from "../FirstScreem/FirstScreem"
import SecondScreen from "../SecondScreen/SecondScreen"
import Navbar from "../Components/Navbar/Navbar"
import Content from "./Content";

import './App.css'

const App = props => {
    return (
        <div className="app">
            {/* <FirstScreem /> */}
            {/* <SecondScreen /> */}
            <BrowserRouter>
                <Navbar />
                <Content />
            </BrowserRouter>
        </div>
    )
}

export default App;