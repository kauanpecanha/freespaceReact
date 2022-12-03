import React from "react"
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from "../App/Home"
import MyCurriculum from "../App/MyCurriculum"
import MyHistory from "../App/MyHistory"
import AboutMe from "../App/AboutMe"


export default function Content(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SobreMim" element={<MyCurriculum />} />
            <Route path="/MinhaHistoria" element={<MyHistory />} />
            <Route path="/MeuCurriculo" element={<AboutMe />} />

        </Routes>
    )
}