import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
                {/* <header className="App-header py-5">
                    <div className="md:flex">
                        <div className="my-auto ml-5 place-content-center text-center">
                            <h1 className="text-primary margin-auto font-semibold sm:text-sm">
                                Ryan McDonough
                            </h1>
                            <Socials />
                        </div>
                    </div>
                </header> */}
                <Nav />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
