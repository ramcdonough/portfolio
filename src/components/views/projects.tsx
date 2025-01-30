import React from "react";
import { TimelinePage } from "../app/TimelinePage";
import { TimelineCard } from "../app/TimelineCard";

function Projects() {
    return (
        <TimelinePage>
            <TimelineCard
                image="/images/logo_goalist.png"
                link="https://goalist-app.vercel.app"
                title="Goalist"
                role="Creator"
                date="Jan 2025 - Present"
                description={[
                    "A web application for managing and tracking goals in a to-do list format, featuring a dashboard that provides an overview of goals and progress to improve visibility and ease context switching.",
                    "Dashboard allows users to create, edit, and delete goals and goal lists.",
                    "Users can provide a description using a rich text editor (utilizing tiptap).",
                    "Progress bars are displayed to track progress towards each goal list.",
                    "Drag and drop goals to reorder them and to move them between lists.",
                    "Authentication is handled using Supabase.",
                    "MVP ready and deployed on Vercel. Plenty more features in the pipeline.",
                ]}
                techStack={["React", "React Context API", "Tailwind", "TypeScript", "Vercel", "Supabase"]}
            />
            <TimelineCard
                image="/images/NUWCLogo.png"
                title="NUWC Employee Workflow Tool (Senior Project)"
                role="Scrum Master"
                date="Sept 2019 - April 2020"
                description={[
                    "Led the design and development of an internal web application enabling seamless management, tracking, and distribution of all approval processes throughout the organization.",
                    "Employed a comprehensive MERN stack (MongoDB, Express, React, Node) coupled with HTML, CSS, and JavaScript to create a robust and user-friendly platform.",
                    "Directed weekly sprint reviews, ensuring project alignment and progression, while also presenting detailed bi-weekly scrum reports to stakeholders.",
                    "Met with stakeholders regularly to discuss progress and gather feedback.",
                    "Engineered a dynamic system, empowering users to establish distinct groups, construct intricate workflows (multi-step company approval processes), and facilitate efficient document upload and download procedures.",
                    "Elected by peers to assume the speaking role for the final presentation.",
                ]}
                techStack={["React", "Express", "Node", "JavaScript", "MongoDB"]}
            />
        </TimelinePage>
    );
}

export default Projects;
