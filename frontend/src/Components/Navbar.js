import React from "react";
import "./Navbarcss.css";

const Navbar = ()=>{
        return(
            <>
            <nav>
                <div className="main-nav">
                    <div className="nav-heading">
                        <h2>
                            <span>O</span>nline
                            <span>J</span>udge
                        </h2>
                    </div>

                    <div className="menu-link">
                        <ul>
                            <li>
                                <a href="http://localhost:3000/home">Home</a>
                                
                            </li>
                            <li>
                                <a href="http://localhost:3000/problemlists">Problem List</a>
                                
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            </>
        )
}

export default Navbar;