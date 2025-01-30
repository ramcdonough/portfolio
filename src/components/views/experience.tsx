import React from "react";
import { TimelinePage } from "../app/TimelinePage";
import { TimelineCard } from "../app/TimelineCard";

function Experience() {
    return (
        <TimelinePage>
            <TimelineCard
                image="/images/logo_linksquares.png"
                role="Software Engineer"
                date="11/2023 - 01/2025"
                link="https://www.linksquares.com"
                description={[
                    "Developed scalable solutions using Ruby on Rails, React, SQL, and GraphQL across 4 repositories.",
                    "Worked closely with Sales and Marketing teams to deliver high-priority, time-sensitive features, analytics, and integrations by a deadline.",
                    "Independently designed and implemented an internal API key management system that enabled clients to view key names and manage activation without exposing key values.",
                    "Built and maintained integrations between internal and third-party systems, optimizing customer workflows, effectively reducing churn and increasing customer satisfaction.",
                    "Adapted quickly to diverse projects, managing frequent context switching between multiple applications, internal tools, integrations, and analytics dashboards to meet business objectives.",
                    "Wrote comprehensive test coverage using RSpec, ensuring code reliability and robustness through well-structured unit, integration, and feature tests.",
                    "Balanced competing priorities across projects with distinct requirements, demonstrating strong organizational skills and technical adaptability in a fast-paced environment."
                ]}
                techStack={["Ruby on Rails", "React", "JavaScript", "SQL", "GraphQL", "AWS", "Docker", "RSpec"]}
            />
            <TimelineCard
                image="/images/logo_visiblebody.png"
                role="Full-Stack Developer"
                date="06/2021 - 11/2023"
                link="https://www.visiblebody.com"
                description={[
                    "Orchestrated the design, development, and deployment of small and large features for a user base of over 250,000 through agile methodologies",
                    "Led a JavaScript initiative, leveraging JQuery, that significantly reduced redirects - improving user experience and system performance.",
                    "Amplified total test coverage from a baseline of 0% to 70%, utilizing Ruby with Capybara and Selenium, resulting in enhanced product stability and quality.",
                    "Formulated SQL queries to extract critical insights for shaping company strategies, and swiftly resolving support issues.",
                    "Contributed to the creation of an automated UI test suite using Python, streamlining testing procedures and fortifying product reliability.",
                    "Collaborated in the structuring and execution of an admin panel, complete with custom role and permission systems for precise user access management.",
                    "Integrated software seamlessly with Canvas REST API, allowing for effortless synchronization of course content and assignments.",
                ]}
                techStack={["Ruby on Rails", "JavaScript", "JQuery", "Python", "SQL", "AWS", "Capybara", "Selenium"]}
            />
        </TimelinePage>
    );
}

export default Experience;
