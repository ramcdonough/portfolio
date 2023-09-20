import React, { useEffect, useState } from "react";
import "../../RadialGradientBackground.css";

const RadialGradientBackground: React.FC = () => {
    // Initialize the gradientStyle with a default position
    const [gradientStyle, setGradientStyle] = useState({
        backgroundImage: `radial-gradient(circle at 50% 50%, #faebb6, #EDE7DE)`, // Default position
    });

    useEffect(() => {
        // Function to update the gradient background position
        const updateGradientPosition = (e: MouseEvent) => {
            const mouseX = e.pageX;
            const mouseY = e.pageY;

            // Calculate the gradient position based on mouse coordinates
            const gradientPosition = `${mouseX}px ${mouseY}px`;

            // Update the gradient style
            setGradientStyle({
                backgroundImage: `radial-gradient(circle at ${gradientPosition}, #faebb6, #EDE7DE)`, // Updated position
            });
        };

        // Add a mousemove event listener to update the gradient position
        window.addEventListener("mousemove", updateGradientPosition);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("mousemove", updateGradientPosition);
        };
    }, []);

    return (
        <div className="radial-gradient-background" style={gradientStyle}></div>
    );
};

export default RadialGradientBackground;
