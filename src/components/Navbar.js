import React, { useEffect, useState } from 'react'
// import Togglebutton from './Togglebutton'
import DarkModeToggle from "react-dark-mode-toggle";
import Modal from './Modal';
import { Link } from 'react-router-dom';
import Compiler from './Compiler';
const Navbar = ({isDarkMode,setIsDarkMode}) => {
        // const [isDarkMode, setIsDarkMode] = useState(() => false );
        useEffect(()=>{
                if(isDarkMode){
                        // document.getElementsByClassName("Editorwindow").theme
                        console.log(isDarkMode)
                        document.body.className = 'LightTheme'
                        console.log(document.getElementsByClassName("Editorwindow"))
                        console.log(document.body.className)
                }
                else{
                        console.log(isDarkMode)
                        console.log(document.body.className)
                        document.body.className = 'DarkTheme' 
                }
        },[isDarkMode])
        return (
                <div>
                        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                                <div className="container-fluid">
                                        <Link className="navbar-brand" href="/">Code Editor</Link>
                                        <Modal></Modal>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                                <ul className="navbar-nav">
                                                        <li className="nav-item">
                                                                <Link className="nav-link active" aria-current="page" to="/">Compiler</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                                <Link className="nav-link active" aria-current="page" to="/meeting"></Link>
                                                        </li>
                                                        {/* <li className="nav-item">
                                                                <Link className="nav-link" to="/about"></Link>
                                                        </li> */}
                                                        <li className="nav-item">
                                                                <Link className="nav-link" to="/Contactus">Contact Us</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                                <Link className="nav-link" to="/Aboutus">About Us</Link>
                                                        </li>
                                                        
                                                </ul>
                                                <div style={{ paddingLeft: "20px" }}>

                                                        <DarkModeToggle
                                                                onChange={setIsDarkMode}
                                                                checked={isDarkMode}
                                                                size={80}
                                                        />
                                                </div>
                                                <div style={{ paddingLeft: "40px" }}>
                                                        <button type="button" className="btn btn-success" 
                                                        // data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                        >
                                                                <Link className="nav-link" to="/meeting" onClick={()=>{
                                                                        console.log(isDarkMode)
                                                                        }}>Join Meeing</Link>
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </nav>
                </div>
        )
}

export default Navbar
