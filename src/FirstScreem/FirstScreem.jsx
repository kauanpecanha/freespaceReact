import React, { useState } from "react";
import './FirstScreem.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import "./selecao.png"

const Screem = () => {
    
    const [vision, setVision] = useState(true)

    function turn(){
        setVision(!vision);
    }

    return(
        <div className="screem">
            <Header title = "Serra Jr. Engenharia"/>
            <div className="content">
                { vision ? 
                    <div className="logo">
                        <img src={require("../FirstScreem/selecao.png")}></img>
                    </div>
                    :
                    <div className="logo" style={{opacity: 0}}>
                        <img src={require("../FirstScreem/selecao.png")}></img>
                    </div>
                }

                <button onClick={() => {turn()}}>Revela/Esconde</button>
            </div>
            <Footer title = "Copyright 2022 - Serra Jr. Engenharia"/>
        </div>
    )
}

export default Screem;