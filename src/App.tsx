import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import avatar from "./avatar.jpg";
import { Socials } from "./components/app/Socials";
import "./App.css";
import Profile from "./components/views/profile";
import Contact from "./components/views/contact";
import Experience from "./components/views/experience";
import Resume from "./components/views/resume";
import { Nav } from "./components/app/Nav";
import RadialGradientBackground from "./components/app/RadialGradientBackground";

function App() {
    return (
        <Router>
            <div className="App min-h-screen overflow-hidden">
                <RadialGradientBackground />
                <header className="App-header py-5">
                    <div className="flex">
                        <div className="hover:scale-105 transition-transform">
                            <img src={avatar} className="Avatar" alt="logo" />
                        </div>
                        <div className="my-auto ml-5 place-content-center text-center">
                            <h1 className="text-primary margin-auto font-semibold">
                                Ryan McDonough
                            </h1>
                            <Socials />
                        </div>
                    </div>
                </header>
                <Nav />
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
