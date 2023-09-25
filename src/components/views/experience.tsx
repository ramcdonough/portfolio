import React from "react";
import FallingText from "../app/FallingText";
import "../../FallingText.css";

function Experience() {
    return (
        <div className="flex justify-center px-3">
            <div className="lg:mt-20 md:w-2/3 sm:w-full px-5 text-primary">
                <FallingText
                    image="/images/VisibleBodyLogo.png"
                    imagePlacement="left"
                    imageSize={300}
                    subtitle="Full-Stack Developer"
                    subtitleDate="06/2021 - Current"
                    body={[
                        "Orchestrated the design, development, and deployment of small and large features for a user base of over 250,000 through agile methodologies with Ruby on Rails, expanding the user base and enhancing user engagement.",
                        "Spearheaded a JavaScript initiative that significantly reduced redirects, elevating user experience and bolstering overall system performance.",
                        "Amplified total test coverage from a baseline of 0% to 70%, utilizing Ruby with Capybara and Selenium, resulting in enhanced product stability and quality.",
                        "Formulated and executed SQL queries to extract critical insights, pivotal in shaping organizational strategies and swiftly resolving support issues.",
                        "Substantially contributed to the creation of an automated UI test suite using Python, streamlining testing procedures and fortifying product reliability.",
                        "Collaborated in the conceptualization, structuring, and execution of a novel admin panel, complete with custom role and permission systems for precise user access management.",
                        "Integrated software seamlessly with Canvas REST API, fostering efficient and seamless communication pathways.",
                    ]}
                />
            </div>
        </div>
    );
}

export default Experience;
