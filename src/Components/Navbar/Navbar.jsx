import React from "react"
import './Navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src={require("../../FirstScreem/selecao.png")}></img>
            </div>
            <div className="title">
                <h1><a href="/">Kauan Peçanha</a></h1>
            </div>
            <div className="routes">
                <ul>
                    <li><a href="/SobreMim">Sobre Mim</a></li>
                    <li><a href="/MinhaHistoria">Minha História</a></li>
                    <li><a href="/MeuCurriculo">Meu Currículo</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;