import { useState } from "react";
import { Socials } from "./Socials";
import "./ContactDropdown.css";

export const ContactDropdown = () => {
    const [copyText, setCopyText] = useState("Copy");

    const handleCopy = () => {
        navigator.clipboard.writeText("McDonoughRyan95@gmail.com");
        setCopyText("Copied!");
        setTimeout(() => setCopyText("Copy"), 2000);
    };

    return (
        <div className="contact-dropdown-card">
            <h3 className="contact-dropdown-title">Get in touch</h3>

            <div className="contact-dropdown-email-row">
                <a
                    href="mailto:McDonoughRyan95@gmail.com"
                    className="contact-dropdown-email"
                >
                    McDonoughRyan95@gmail.com
                </a>
                <button
                    type="button"
                    onClick={handleCopy}
                    className="contact-dropdown-copy"
                >
                    {copyText}
                </button>
            </div>

            <div className="contact-dropdown-divider" />

            <div className="contact-dropdown-socials">
                <Socials iconColor="white" size="md" />
            </div>

            <p className="contact-dropdown-status">
                <span className="contact-dropdown-dot" />
                Open to opportunities
            </p>
        </div>
    );
};
