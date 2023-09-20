import React from "react";
import FallingText from "../app/FallingText";

function Profile() {
    // Determine the imagePlacement based on screen width
    const imagePlacement = window.innerWidth < 768 ? "center" : "left";

    return (
        <div className="flex justify-center h-screen">
            <div className="md:mt-40 md:w-1/2 sm:w-full p-5 text-primary">
                <FallingText
                    image="/images/avatar.jpg"
                    imagePlacement="auto"
                    imageSize={150}
                    circle={true}
                    title="Hello."
                    body="I'm Ryan. A full-stack developer with a passion for creating engaging
                    and impactful software experiences."
                />
            </div>
        </div>
    );
}

export default Profile;
