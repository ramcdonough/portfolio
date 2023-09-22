import React from "react";
import { Socials } from "../app/Socials";
import "../../FallingText.css";
import linkedin from "../../svg/linkedin.svg";
import github from "../../svg/github.svg";
import email from "../../svg/email.svg";

function Contact() {
    return (
        <div className="flex justify-center h-screen">
            <div className=" md:w-1/3 sm:w-full p-5 text-primary ">
                <div className="falling-text-image justify-center flex btn h-auto hover:drop-shadow-xl transition-transform p-10">
                    <img src={linkedin} className="w-32 h-32" alt="LinkedIn" />
                    <h3 className="my-auto ml-10">LinkedIn</h3>
                </div>
                <div className="falling-text-image justify-center flex btn h-auto hover:drop-shadow-xl transition-transform p-10">
                    <img src={github} className="w-32 h-32" alt="LinkedIn" />
                    <h3 className="my-auto ml-10">LinkedIn</h3>
                </div>
                <div className="falling-text-image justify-center flex btn h-auto hover:drop-shadow-xl transition-transform p-10">
                    <img src={email} className="w-32 h-32" alt="LinkedIn" />
                    <h3 className="my-auto ml-10">LinkedIn</h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;
