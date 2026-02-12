import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FallingText from "../app/FallingText";
import { ProfileCard } from "../profile/ProfileCard";
import ProfileSkills from "../profile/ProfileSkills";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.5 },
    },
};

const cardItem = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
    },
};

const skillsContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

function Profile() {
    const [cardsReady, setCardsReady] = useState(false);
    const imagePlacement = window.innerWidth < 768 ? "center" : "left";

    // Trigger card animation after mount so it runs on refresh as well as navigation
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            setCardsReady(true);
        });
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <div className="relative min-h-screen cursor-default">
            <div className="flex justify-center w-full cursor-default">
                <div className="container relative w-full md:mt-8 md:w-2/3 px-4 py-2 md:p-5 text-center md:text-left text-primary font-sans cursor-default">
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
                        className="flex flex-col gap-4 cursor-default mt-5 md: mt-1 md:ml-1"
                        variants={skillsContainer}
                        initial="hidden"
                        animate={cardsReady ? "visible" : "hidden"}
                    >
                        <ProfileSkills />
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10 mb-16 md:mb-20"
                        variants={container}
                        initial="hidden"
                        animate={cardsReady ? "visible" : "hidden"}
                    >
                        <motion.div variants={cardItem} className="w-full">
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
                        <motion.div variants={cardItem} className="w-full">
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
                        <motion.div variants={cardItem} className="w-full">
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
