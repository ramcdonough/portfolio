import React from "react";
import { useInView } from "framer-motion";

export interface TimelineCardProps {
    id: string;
    image: string;
    title?: string;
    role: string;
    date: string;
    description: string[];
    link?: string;
    linkText?: string;
    techStack?: string[];
    /** Index for staggered scroll-in animation (0, 1, 2, ...) */
    staggerIndex?: number;
    /** When set, animation is driven by this instead of the card's own useInView (for section-level stagger) */
    animateIn?: boolean;
}

const STAGGER_DELAY_S = 0.14;

export const TimelineCard: React.FC<TimelineCardProps> = ({
    id,
    image,
    title,
    role,
    date,
    description,
    link,
    techStack,
    staggerIndex = 0,
    animateIn,
}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px 60px 0px" });
    const shouldAnimate = animateIn !== undefined ? animateIn : isInView;

    const ImageComponent = () => (
        <img 
            src={image} 
            alt={role} 
            className="max-w-[180px] h-auto object-contain filter brightness-110 contrast-125 transition-all duration-300 hover:brightness-125 hover:contrast-150"
        />
    );

    return (
        <div
            ref={ref}
            id={id}
            className={`timeline-card timeline-card-glow mb-6 bg-[#1a1a1a] rounded-xl border border-gray-700/30 overflow-hidden hover:border-accent/25 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/5 border-l-4 border-l-accent/60 scroll-mt-24 ${shouldAnimate ? "timeline-card-visible" : ""}`}
            style={
                shouldAnimate
                    ? { animationDelay: `${staggerIndex * STAGGER_DELAY_S}s` }
                    : undefined
            }
        >
            <div className="flex flex-col md:flex-row">
                {/* Image Container */}
                <div className="md:w-1/3 p-3 md:p-4 min-h-[100px] flex items-center justify-center bg-[#151515]">
                    {link ? (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer hover:scale-105 transition-transform duration-300 block py-2 touch-manipulation"
                        >
                            <ImageComponent />
                        </a>
                    ) : (
                        <ImageComponent />
                    )}
                </div>

                {/* Content Container */}
                <div className="md:w-2/3 p-3 md:p-4">
                    {/* Header Section */}
                    <div className="mb-3">
                        {title && (
                            <h2 className="text-base font-bold text-white mb-1">
                                {title}
                            </h2>
                        )}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 text-gray-300">
                            <h3 className="text-sm font-semibold">
                                {role}
                            </h3>
                            <span className="sm:ml-auto text-xs text-gray-400">
                                {date}
                            </span>
                        </div>
                    </div>

                    {/* Description List */}
                    <div className="space-y-1.5">
                        {description.map((item, index) => (
                            <div key={index} className="flex items-start gap-2 text-gray-300">
                                <span className="text-accent text-xs mt-0.5 shrink-0">•</span>
                                <p className="text-xs leading-relaxed min-w-0">{item}</p>
                            </div>
                        ))}
                    </div>

                    {techStack && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {techStack.map((item, index) => (
                                <span key={index} className="text-xs text-gray-400 bg-gray-800/80 hover:bg-accent/15 hover:text-accent px-2 py-1 rounded-md transition-colors duration-200">{item}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}; 