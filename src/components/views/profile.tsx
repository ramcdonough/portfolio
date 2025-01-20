import React from "react";
import FallingText from "../app/FallingText";
import { ProfileCard } from "../app/ProfileCard";

function Profile() {
    const imagePlacement = window.innerWidth < 768 ? "center" : "left";

    return (
        <div className="relative min-h-screen">
            <div className="flex justify-center w-full">
                <div className="container relative w-full md:mt-32 lg:w-1/2 md:w-3/4 p-5 text-center md:text-left text-primary">
                    <FallingText
                        image="/images/avatar.jpg"
                        imagePlacement={imagePlacement}
                        imageSize={150}
                        circle={true}
                        title="Ryan McDonough"
                        subtitle="Software Engineer"
                        body="Designing scalable back-end architecture and intuitive 
                        front-end interfaces, with a focus on reusability, 
                        modular design, and delivering exceptional user experiences."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-20">
                        <ProfileCard 
                            logo="/images/logo_linksquares.png"
                            logoAlt="Linksquares Logo"
                            title="LinkSquares"
                            subtitle="Software Engineer"
                            date="2023 - 2025"
                            description="Building scalable solutions for AI-powered contract analysis"
                        />
                        <ProfileCard 
                            logo="/images/logo_visiblebody.png"
                            logoAlt="Visible Body Logo"
                            title="Visible Body"
                            subtitle="Full-Stack Developer"
                            date="2021 - 2023"
                            description="Developed biology and anatomy course management software"
                        />
                        <ProfileCard 
                            logo="/images/logo_umassd_alumni.png"
                            logoAlt="Umass Dartmouth Alumni"
                            title="UMass Dartmouth"
                            subtitle="Computer Science, B.S."
                            date="Class of 2020"
                            description="Focus on Software Engineering and Algorithm Design"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
