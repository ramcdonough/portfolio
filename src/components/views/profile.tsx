import React from "react";
import FallingText from "../app/FallingText";

function Profile() {
    // Determine the imagePlacement based on screen width
    const imagePlacement = window.innerWidth < 768 ? "center" : "left";

    return (
        <div className="flex justify-center h-screen">
            <div className="md:mt-40 lg:w-1/2 md:w-3/4 sm:w-full p-5 text-center md:text-left text-primary">
                <FallingText
                    image="/images/avatar.jpg"
                    imagePlacement={imagePlacement}
                    imageSize={150}
                    circle={true}
                    // title="Ryan McDonough"
                    subtitle="Software Engineer"
                    body="Designing scalable back-end architecture and intuitive 
                    front-end interfaces, with a focus on reusability, 
                    modular design, and delivering exceptional user experiences."
                />
            </div>
        </div>
    );
}

export default Profile;
