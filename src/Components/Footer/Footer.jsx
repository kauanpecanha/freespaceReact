import React from 'react'
import './Footer.css'

const Footer = props => {
    return(
        <div className="footer" style={{backgroundColor: props.color}}>
            <h1>{props.title}</h1>
        </div>
    )
}


export default Footer;