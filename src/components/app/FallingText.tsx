import React from "react";
import "../../FallingText.css";

interface FallingTextProps {
    title?: string;
    subtitle?: string;
    body?: string;
}

const FallingText: React.FC<FallingTextProps> = ({ title, subtitle, body }) => {
    return (
        <div className="falling-text-container">
            {title && (
                <div className="falling-text-title text-xl font-bold">
                    <h1>{title}</h1>
                </div>
            )}
            {subtitle && (
                <div className="falling-text-subtitle">
                    <h2>{subtitle}</h2>
                </div>
            )}
            {body && (
                <div className="falling-text-body">
                    <span>{body}</span>
                </div>
            )}
        </div>
    );
};

export default FallingText;
