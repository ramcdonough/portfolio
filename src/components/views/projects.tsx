import React from "react";
import { TimelinePage } from "../app/TimelinePage";
import { TimelineCard } from "../app/TimelineCard";

function Projects() {
    return (
        <TimelinePage>
            <TimelineCard
                image="/images/NUWCLogo.png"
                title="NUWC Employee Workflow Tool (Senior Project)"
                role="Scrum Master"
                date="Sept 2019 - April 2020"
                description={[
                    "Elected by peers to assume the speaking role for the final presentation.",
                    "Spearheaded the design and development of an internal web application enabling seamless management, tracking, and distribution of all approval processes throughout the organization.",
                    "Employed a comprehensive MERN stack (MongoDB, Express, React, Node) coupled with HTML, CSS, and JavaScript to create a robust and user-friendly platform.",
                    "Directed weekly sprint reviews, ensuring project alignment and progression, while also presenting detailed bi-weekly scrum reports to stakeholders.",
                    "Engineered a dynamic system, empowering users to establish distinct groups, construct intricate workflows (multi-step company approval processes), and facilitate efficient document upload and download procedures.",
                ]}
            />
        </TimelinePage>
    );
}

export default Projects;
