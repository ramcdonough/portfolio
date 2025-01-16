import React from "react";
import { TimelinePage } from "../app/TimelinePage";
import { TimelineCard } from "../app/TimelineCard";

function Experience() {
    return (
        <TimelinePage>
            <TimelineCard
                image="/images/logo_linksquares.png"
                role="Software Engineer"
                date="06/2023 - 01/2024"
                link="https://www.linksquares.com"
                description={[
                    "Developed and maintained a comprehensive API for a client-facing application, ensuring robust data handling and efficient communication with external systems.",
                    "Implemented a comprehensive authentication system using JWT, enhancing security and user experience.",
                    "Optimized database queries and implemented caching strategies to improve application performance and scalability.",
                ]}
            />
            <TimelineCard
                image="/images/VisibleBodyLogo.png"
                role="Full-Stack Developer"
                date="06/2021 - Current"
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
