import React from "react";

export interface TimelineCardProps {
    image: string;
    title?: string;
    role: string;
    date: string;
    description: string[];
    link?: string;
    linkText?: string;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
    image,
    title,
    role,
    date,
    description,
    link,
}) => {
    const ImageComponent = () => (
        <img 
            src={image} 
            alt={role} 
            className="max-w-[180px] h-auto object-contain filter brightness-110 contrast-125 transition-all duration-300 hover:brightness-125 hover:contrast-150"
        />
    );

    return (
        <div className="mb-6 bg-[#1a1a1a] rounded-xl border border-gray-700/30 overflow-hidden hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
                {/* Image Container */}
                <div className="md:w-1/3 p-4 flex items-center justify-center bg-[#151515]">
                    {link ? (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer hover:scale-105 transition-transform duration-300"
                        >
                            <ImageComponent />
                        </a>
                    ) : (
                        <ImageComponent />
                    )}
                </div>

                {/* Content Container */}
                <div className="md:w-2/3 p-4">
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
                            <div key={index} className="flex items-center gap-2 text-gray-300">
                                <span className="text-blue-400 text-xs">•</span>
                                <p className="text-xs leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}; 