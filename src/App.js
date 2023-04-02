import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import Pairprogramming from './components/Pairprogramming';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Compiler from './components/Compiler';
import React, { useState, useEffect } from 'react'
function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => true);
    useEffect(() => {
        if (isDarkMode) {
            document.body.className = 'DarkTheme'
        }
        else {
            document.body.className = 'LightTheme'
        }
    }, [isDarkMode])
    return (
        <>
            <div>
                <div>
                    <Toaster
                        position="top-right"
                        toastOptions={{
                            success: {
                                theme: {
                                    primary: '#4aed88',
                                },
                            },
                        }}
                    ></Toaster>
                </div>
                <BrowserRouter>
                    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
                    {/* <Pairprogramming ></Pairprogramming> */}
                    <Routes>
                        <Route path="/meeting" element={<Home />}></Route>
                        <Route
                            path="/editor/:roomId"
                            element={<EditorPage />}
                        >
                        </Route>
                        <Route path="/Contactus" element={<Contactus />}></Route>
                        <Route path="/Aboutus" element={<Aboutus />}></Route>
                        <Route path="/" element={<Compiler
                        // authed={true}
                        />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
