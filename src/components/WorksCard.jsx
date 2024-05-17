import React from "react"
import icon from "../images/wallet-icon.png"

export default function Works(props){
    return (
        <div className="works-card">
            <img
                src={icon}
                className="works-icon"
            />
            <p className="works-title">{props.title}</p>
            <p className="works-desc">{props.desc}</p>
        </div>
    )
}