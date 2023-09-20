import React from "react";
import { Socials } from "../app/Socials";
import "../../FallingText.css";

function Contact() {
    return (
        <div className="flex justify-center h-screen">
            <div className=" md:w-1/2 sm:w-full p-5 text-primary ">
                <div className="falling-text-image justify-center">
                    <Socials vertical={true} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
