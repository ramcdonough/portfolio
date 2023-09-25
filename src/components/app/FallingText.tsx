import React from "react";
import "../../FallingText.css";

interface FallingTextProps {
    title?: string;
    subtitle?: string;
    subtitleDate?: string;
    body?: string | string[];
    image?: string;
    imagePlacement?: "center" | "left" | "right" | "auto";
    imageSize?: number;
    circle?: boolean;
}

const FallingText: React.FC<FallingTextProps> = ({
    title,
    subtitle,
    subtitleDate,
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
        <div className="flex-col lg:flex-row">
            {image && imagePlacement !== "right" && (
                <div className="falling-text-image">
                    <div
                        className="image-container lg:mr-10 mb-8 mx-auto lg:mx-0"
                        style={
                            imageSize !== undefined ? { width: imageSize } : {}
                        }
                    >
                        <img
                            src={image}
                            className={`image hover:scale-105 transition-transform drop-shadow-xl ${
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
                    <div
                        className={`falling-text-subtitle flex ${
                            body ? "font-bold" : ""
                        }`}
                    >
                        <h3>{subtitle}</h3>
                        {subtitleDate && (
                            <span className="ml-auto font-normal font-sm">
                                {subtitleDate}
                            </span>
                        )}
                    </div>
                )}
                {body && (
                    <div className="falling-text-body font-semibold">
                        {Array.isArray(body) ? (
                            <ul>
                                {body.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        -{item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <body>{body}</body>
                        )}
                    </div>
                )}
            </div>
            {image && imagePlacement == "right" && (
                <div className="falling-text-image">
                    <div
                        className="image-container md:ml-10 mb-8 mx-auto"
                        style={
                            imageSize !== undefined
                                ? { width: imageSize, height: imageSize }
                                : {}
                        }
                    >
                        <img
                            src={image}
                            className={`image hover:scale-105 transition-transform drop-shadow-xl ${
                                circle ? "rounded-full" : ""
                            }`}
                            alt={altText}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FallingText;
