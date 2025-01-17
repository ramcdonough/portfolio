import React from "react";

interface TimelinePageProps {
    children: React.ReactNode;
}

export const TimelinePage: React.FC<TimelinePageProps> = ({ children }) => {
    return (
        <div className="flex justify-center px-3 min-h-full bg-dark">
            <div className="lg:mt-20 md:w-2/3 sm:w-full px-5 text-primary pb-10">
                {children}
            </div>
        </div>
    );
}; 