import React from "react";
import { motion } from "framer-motion";
import FallingText from "../app/FallingText";
import { ProfileCard } from "../app/ProfileCard";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const cardItem = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

function Profile() {
    const imagePlacement = window.innerWidth < 768 ? "center" : "left";

    return (
        <div className="relative min-h-screen">
            <div className="flex justify-center w-full">
                <div className="container relative w-full md:mt-32 lg:w-1/2 md:w-3/4 px-4 py-6 md:p-5 text-center md:text-left text-primary font-sans">
                    <FallingText
                        image="/images/avatar.jpg"
                        imagePlacement={imagePlacement}
                        imageSize={150}
                        circle={true}
                        gradientTitle={true}
                        title="Ryan McDonough"
                        subtitle="Software Engineer"
                        body="Designing scalable back-end architecture and intuitive 
                        front-end interfaces, with a focus on reusability, 
                        modular design, and delivering exceptional user experiences."
                    />
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10 mb-16 md:mb-20"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={cardItem}>
                            <ProfileCard 
                                logo="/images/logo_linksquares.png"
                                logoAlt="Linksquares Logo"
                                title="LinkSquares"
                                subtitle="Software Engineer"
                                date="2023 - 2025"
                                description="AI-powered contract lifecycle management software"
                                link="/experience#linksquares"
                            />
                        </motion.div>
                        <motion.div variants={cardItem}>
                            <ProfileCard 
                                logo="/images/logo_visiblebody.png"
                                logoAlt="Visible Body Logo"
                                title="Visible Body"
                                subtitle="Full-Stack Developer"
                                date="2021 - 2023"
                                description="Biology and anatomy course management software"
                                link="/experience#visiblebody"
                            />
                        </motion.div>
                        <motion.div variants={cardItem}>
                            <ProfileCard 
                                logo="/images/logo_umassd_alumni.png"
                                logoAlt="Umass Dartmouth Alumni"
                                title="UMass Dartmouth"
                                subtitle="Computer Science, B.S."
                                date="Class of 2020"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
