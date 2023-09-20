import React from "react";
import "../../FallingText.css";

interface FallingTextProps {
    title?: string;
    subtitle?: string;
    body?: string;
    image?: string;
    imagePlacement?: "center" | "left" | "right" | "auto";
    imageSize?: number;
    circle?: boolean;
}

const FallingText: React.FC<FallingTextProps> = ({
    title,
    subtitle,
    body,
    image,
    imagePlacement = "auto",
    imageSize,
    circle = false,
}) => {
    let altText = image;

    if (image) {
        const parts = image.split("/");
        const fileNameWithExtension = parts[parts.length - 1];
        altText = fileNameWithExtension.split(".")[0];
    }

    return (
        //center not working properly
        <div className="sm:flex md:flex-row">
            {image && imagePlacement !== "right" && (
                <div className="falling-text-image">
                    <div
                        className="image-container md:mr-10 mb-8 mx-auto"
                        style={
                            imageSize !== undefined
                                ? { width: imageSize, height: imageSize }
                                : {}
                        }
                    >
                        <img
                            src={image}
                            className={`image hover:scale-105 transition-transform ${
                                circle ? "rounded-full" : ""
                            }`}
                            alt={altText}
                        />
                    </div>
                </div>
            )}
            <div>
                {title && (
                    <div className="falling-text-title text-xl font-bold">
                        <h2>{title}</h2>
                    </div>
                )}
                {subtitle && (
                    <div className="falling-text-subtitle">
                        <h3>{subtitle}</h3>
                    </div>
                )}
                {body && (
                    <div className="falling-text-body">
                        <h3>{body}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FallingText;
