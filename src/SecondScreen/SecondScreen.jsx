import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./SecondScreen.css"
import { useState } from "react"

const Screen = () => {
    
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);    
    
    function addTask(){
        setList((prevState) => {
            return[...prevState, task]
        })
        setTask("")
    }

    return(
        <div className="screen2">
            <Header title = "Serra Jr Engenharia" color="#34568B"/>
            <div className="content">
                <div className="title">
                    <h1>Lista</h1>
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Nome" value={task} onChange={(e) => setTask(e.target.value)}></input>
                    <button onClick={()=> addTask()}>Adicionar</button>
                </div>
                <div className="list-area">

                </div>
            </div>
            <Footer title = "Copyright 2022 - Serra Jr Engenharia" color="#34568B"/>
        </div>
    )
}

export default Screen;