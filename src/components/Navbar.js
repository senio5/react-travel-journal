import React from "react";
import world from "../images/World-Icon.png"

export default function Navbar(){
    return(
        <nav>
        <img className="nav-logo" src={world} alt="" />
        <h3>My Travel Journal</h3>
    </nav>
    )
}