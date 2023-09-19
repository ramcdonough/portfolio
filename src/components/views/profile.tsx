import React from "react";
import FallingText from "../app/FallingText";

function Profile() {
    return (
        <div className="flex justify-center h-screen">
            <div className="m-5 p-5 md:w-1/2 sm:w-full text-sm text-primary">
                <FallingText
                    title="about me"
                    body="I'm a full-stack software developer proficient in
                    JavaScript, TypeScript, Ruby, and Python, with a passion for
                    transforming ideas into impactful and intuitive software
                    experiences. I enjoy forming and contributing to a product's
                    unqique personality in order to create something memorable.
                    I enjoy creating responsive UI's that provide users with
                    dynamic feedback."
                />
            </div>
        </div>
    );
}

export default Profile;
