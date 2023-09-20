import React from "react";
import FallingText from "../app/FallingText";
import "../../FallingText.css";

function Experience() {
    return (
        <div className="flex justify-center h-screen">
            <div className="md:mt-40 md:w-1/2 sm:w-full p-5 text-primary">
                <FallingText
                    image="/images/VisibleBodyLogo.png"
                    imagePlacement="left"
                    imageSize={300}
                    circle={true}
                    title="Software Developer"
                    body="
                    - Orchestrated agile development for a 250,000+ user base, boosting engagement and expanding product reach with Ruby on Rails.
                    - Spearheaded JavaScript initiatives for improved UX and system performance, reducing redirects.
                    - Elevated test coverage from 0% to 70%, enhancing product stability with Ruby, Capybara, and Selenium, and leveraged SQL insights to shape strategies and resolve issues."
                />
                <hr className="border-primary falling-text-body" />
            </div>
        </div>
    );
}

export default Experience;
