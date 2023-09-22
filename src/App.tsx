import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Socials } from "./components/app/Socials";
import "./App.css";
import Profile from "./components/views/profile";
import Contact from "./components/views/contact";
import Experience from "./components/views/experience";
import Projects from "./components/views/projects";
import { Nav } from "./components/app/Nav";
import RadialGradientBackground from "./components/app/RadialGradientBackground";

function App() {
    return (
        <Router>
            <div className="App pb-10 overflow-hidden">
                <RadialGradientBackground />
                <Nav />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
