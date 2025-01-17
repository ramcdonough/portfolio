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
            />
            <TimelineCard
                image="/images/logo_visiblebody.png"
                role="Full-Stack Developer"
                date="06/2021 - 11/2023"
                link="https://www.visiblebody.com"
                description={[
                    "Orchestrated the design, development, and deployment of small and large features for a user base of over 250,000 through agile methodologies with Ruby on Rails, expanding the user base and enhancing user engagement.",
                    "Spearheaded a JavaScript initiative that significantly reduced redirects, elevating user experience and bolstering overall system performance.",
                    "Amplified total test coverage from a baseline of 0% to 70%, utilizing Ruby with Capybara and Selenium, resulting in enhanced product stability and quality.",
                    "Formulated and executed SQL queries to extract critical insights, pivotal in shaping organizational strategies and swiftly resolving support issues.",
                    "Substantially contributed to the creation of an automated UI test suite using Python, streamlining testing procedures and fortifying product reliability.",
                    "Collaborated in the conceptualization, structuring, and execution of a novel admin panel, complete with custom role and permission systems for precise user access management.",
                    "Integrated software seamlessly with Canvas REST API, fostering efficient and seamless communication pathways.",
                ]}
            />
        </TimelinePage>
    );
}

export default Experience;
