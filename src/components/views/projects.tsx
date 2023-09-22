import React from "react";
import FallingText from "../app/FallingText";

function Projects() {
    return (
        <div className="flex justify-center">
            <div className="md:mt-20 md:w-2/3 sm:w-full px-5 text-primary">
                <FallingText
                    image="/images/NUWCLogo.png"
                    imagePlacement="left"
                    imageSize={300}
                    title="NUWC Employee Workflow Tool"
                    subtitle="Scrum Master"
                    subtitleDate="Sept 2019 - April 2020"
                    body={[
                        "Elected by peers to assume the speaking role for the final presentation.",
                        "Spearheaded the design and development of an internal web application enabling seamless management, tracking, and distribution of all approval processes throughout the organization.",
                        "Employed a comprehensive MERN stack (MongoDB, Express, React, Node) coupled with HTML, CSS, and JavaScript to create a robust and user-friendly platform.",
                        "Directed weekly sprint reviews, ensuring project alignment and progression, while also presenting detailed bi-weekly scrum reports to stakeholders.",
                        "Engineered a dynamic system, empowering users to establish distinct groups, construct intricate workflows (multi-step company approval processes), and facilitate efficient document upload and download procedures.",
                    ]}
                />
                {/* <hr className="border-primary falling-text-body" /> */}
            </div>
        </div>
    );
}

export default Projects;
