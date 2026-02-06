import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { TimelinePage } from "../app/TimelinePage";
import { TimelineCard } from "../app/TimelineCard";

function Experience() {
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px 60px 0px" });

    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;
        const id = hash.substring(1);
        const scrollToTarget = () => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        const rafId = requestAnimationFrame(() => {
            requestAnimationFrame(scrollToTarget);
        });
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <TimelinePage>
            <div ref={sectionRef}>
            <TimelineCard
                staggerIndex={0}
                animateIn={sectionInView}
                id="linksquares"
                image="/images/logo_linksquares.png"
                role="Software Engineer"
                date="11/2023 - 01/2025"
                link="https://www.linksquares.com"
                description={[
                    "Developed scalable solutions across 4 repositories using Ruby on Rails, React, SQL, and GraphQL, supporting 1,000+ B2B SaaS customers",
                    "Independently designed and implemented an internal API key management system, allowing clients to securely view key names and manage activation without exposing key values.",
                    "Engineered and optimized integrations between internal and third-party systems, streamlining customer workflows and reducing churn.",
                    "Collaborated cross-functionally with Sales and Marketing teams to deliver high-impact features, analytics, and integrations under tight deadlines.",
                    "Adapted seamlessly to diverse projects, managing frequent context switching across multiple applications, internal tools, integrations, and analytics dashboards.",
                    "Managed competing priorities across multiple fast-paced projects, demonstrating strong organizational skills and technical adaptability.",
                    "Ensured code reliability by writing comprehensive test coverage with RSpec, improving stability through unit, integration, and feature tests.",
                ]}
                techStack={["Ruby on Rails", "React", "JavaScript", "SQL", "GraphQL", "AWS", "Docker", "RSpec"]}
            />
            <TimelineCard
                staggerIndex={1}
                animateIn={sectionInView}
                id="visiblebody"
                image="/images/logo_visiblebody.png"
                role="Full-Stack Developer"
                date="06/2021 - 11/2023"
                link="https://www.visiblebody.com"
                description={[
                    "Orchestrated the design, development, and deployment of features serving 250,000+ users, enhancing scalability and performance through agile methodologies.",
                    "Led a JavaScript initiative leveraging jQuery, reducing redirects and improving load times and system performance.",
                    "Integrated software with Canvas REST API, enabling seamless course content and assignment synchronization.",
                    "Designed and implemented an admin panel with custom role-based access control, enabling precise user permission management.",
                    "Designed and executed SQL queries to extract critical insights, shaping company strategy and accelerating support resolutions.",
                    "Increased test coverage from 0% to 70% using Ruby, Capybara, and Selenium, strengthening product stability and quality.",
                    "Developed an automated UI test suite using Python, streamlining testing and enhancing product reliability.",
                ]}
                techStack={["Ruby on Rails", "JavaScript", "JQuery", "Python", "SQL", "AWS", "Capybara", "Selenium"]}
            />
            </div>
        </TimelinePage>
    );
}

export default Experience;
