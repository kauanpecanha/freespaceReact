import React from "react";
import Calculator from '../Calculator/Calculator'
import FirstScreem from "../FirstScreem/FirstScreem"
import SecondScreen from "./SecondScreen/SecondScreen"
import './App.css'

const App = props => {
    return(
        <div className="app">
            {/* <FirstScreem /> */}
            <SecondScreen />
        </div>
    )
}

export default App;